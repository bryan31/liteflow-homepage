# Homepage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 用 Canvas 节点漂移动效替换视频背景，并重新设计 Features 卡片样式，提升首页视觉品质，同时不破坏 vdoing 主题结构。

**Architecture:** 在 `enhanceApp.js` 中通过 router 钩子检测首页路由，动态注入 Canvas 并启动动画；离开首页时完整清理。样式覆盖集中在 `index.styl`，不接触主题源码。

**Tech Stack:** VuePress 1.x, vdoing 主题, Stylus CSS, Canvas 2D API, ES Module

**Dev server:** `npm run start` (访问 http://localhost:8080)

**Spec:** `docs/superpowers/specs/2026-03-21-homepage-redesign-design.md`

---

## File Map

| 文件 | 操作 | 职责 |
|------|------|------|
| `docs/.vuepress/utils/banner-canvas.js` | 新建 | Canvas 节点漂移动效全部逻辑（与路由/Vue 解耦） |
| `docs/.vuepress/enhanceApp.js` | 修改 | 首页路由检测，调用 canvas 初始化/清理 |
| `docs/.vuepress/styles/index.styl` | 修改 | Banner CSS（移除静态背景图，添加网格/光晕）+ Features 卡片新样式 |
| `docs/index.md` | 确认 | 确认 `bannerBg: none` 已设置（无需修改） |

> **主题响应说明：** 动效通过每帧调用 `isDarkTheme()` 读取 `<html>` class 实现主题感知，功能等价于 MutationObserver，且无需额外的 observer 生命周期管理。cleanup 函数只需清理 `requestAnimationFrame` 和 `resize` 监听器。

---

## Task 1：创建 Canvas 动效模块

**Files:**
- Create: `docs/.vuepress/utils/banner-canvas.js`

### 节点系统核心

- [ ] **Step 1: 新建文件，写节点创建函数**

```js
// docs/.vuepress/utils/banner-canvas.js

const NODE_COUNT = 25
const LINK_DISTANCE = 140
const DASH_SPEED = 0.3

function createNodes(w, h) {
  return Array.from({ length: NODE_COUNT }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 2.5 + 2.5,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    phase: Math.random() * Math.PI * 2,
    baseAlpha: Math.random() * 0.3 + 0.5,
  }))
}

function isDarkTheme() {
  const cls = document.documentElement.classList
  return cls.contains('theme-mode-dark') || cls.contains('theme-mode-read')
}
```

- [ ] **Step 2: 继续追加 — draw 循环函数**

```js
function drawFrame(ctx, canvas, nodes, dashOffset) {
  const w = canvas.width
  const h = canvas.height
  const dark = isDarkTheme()
  const maxLineAlpha = dark ? 0.55 : 0.28
  // 亮色模式节点整体透明度降低（baseAlpha × 0.6），与暗色发光效果区分
  const maxNodeAlpha = dark ? 0.9 : 0.5 * 0.6

  ctx.clearRect(0, 0, w, h)

  // 更新节点位置
  const ts = performance.now()
  for (const n of nodes) {
    n.x += n.vx + Math.sin(ts * 0.0005 + n.phase) * 0.15
    n.y += n.vy + Math.cos(ts * 0.0004 + n.phase * 1.3) * 0.15
    if (n.x < n.r)     { n.x = n.r;     n.vx =  Math.abs(n.vx) }
    if (n.x > w - n.r) { n.x = w - n.r; n.vx = -Math.abs(n.vx) }
    if (n.y < n.r)     { n.y = n.r;     n.vy =  Math.abs(n.vy) }
    if (n.y > h - n.r) { n.y = h - n.r; n.vy = -Math.abs(n.vy) }
  }

  // 连线（流动虚线）
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i], b = nodes[j]
      const dx = b.x - a.x, dy = b.y - a.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < LINK_DISTANCE) {
        const alpha = (1 - dist / LINK_DISTANCE) * maxLineAlpha
        ctx.save()
        ctx.beginPath()
        ctx.setLineDash([5, 4])
        ctx.lineDashOffset = -dashOffset
        ctx.strokeStyle = `rgba(255,56,97,${alpha})`
        ctx.lineWidth = dark ? 1.2 : 0.9
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.stroke()
        ctx.restore()
      }
    }
  }

  // 节点（呼吸脉冲 + 暗色光晕）
  for (const n of nodes) {
    const pulse = Math.sin(ts * 0.001 + n.phase) * 0.3 + 0.7
    const alpha = n.baseAlpha * maxNodeAlpha * pulse
    if (dark) {
      const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 4)
      grad.addColorStop(0, `rgba(255,56,97,${alpha * 0.5})`)
      grad.addColorStop(1, 'rgba(255,56,97,0)')
      ctx.beginPath()
      ctx.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2)
      ctx.fillStyle = grad
      ctx.fill()
    }
    ctx.beginPath()
    ctx.arc(n.x, n.y, n.r * pulse, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255,56,97,${alpha})`
    ctx.fill()
  }
}
```

- [ ] **Step 3: 继续追加 — 导出 initBannerCanvas**

```js
export function initBannerCanvas(bannerEl) {
  const canvas = document.createElement('canvas')
  canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;'
  bannerEl.style.position = 'relative'
  bannerEl.insertBefore(canvas, bannerEl.firstChild)

  const ctx = canvas.getContext('2d')
  let nodes = []
  let dashOffset = 0
  let rafId = null

  function resize() {
    canvas.width = bannerEl.offsetWidth
    canvas.height = bannerEl.offsetHeight
    nodes = createNodes(canvas.width, canvas.height)
  }

  function loop() {
    dashOffset = (dashOffset + DASH_SPEED) % 20
    drawFrame(ctx, canvas, nodes, dashOffset)
    rafId = requestAnimationFrame(loop)
  }

  resize()
  window.addEventListener('resize', resize)
  rafId = requestAnimationFrame(loop)

  return function cleanup() {
    cancelAnimationFrame(rafId)
    window.removeEventListener('resize', resize)
    canvas.remove()
  }
}
```

- [ ] **Step 4: 继续追加 — 导出 injectLightOrbs**

亮色模式需要两个径向渐变光晕 div（不用伪元素，避免与 Features 卡片 `::before` 冲突）。

```js
export function injectLightOrbs(bannerEl) {
  const orb1 = document.createElement('div')
  orb1.className = 'banner-orb banner-orb-1'
  const orb2 = document.createElement('div')
  orb2.className = 'banner-orb banner-orb-2'
  bannerEl.appendChild(orb1)
  bannerEl.appendChild(orb2)
  return function cleanup() {
    orb1.remove()
    orb2.remove()
  }
}
```

- [ ] **Step 5: Commit**

```bash
git add docs/.vuepress/utils/banner-canvas.js
git commit -m "feat: add banner canvas animation module"
```

---

## Task 2：更新 enhanceApp.js — 注入 Canvas

**Files:**
- Modify: `docs/.vuepress/enhanceApp.js`

- [ ] **Step 1: 在文件顶部添加 import**

在 `enhanceApp.js` 第一行之前插入：

```js
import { initBannerCanvas, injectLightOrbs } from './utils/banner-canvas'
```

- [ ] **Step 2: 在 export default 函数体顶部添加清理变量**

在 `export default ({` 之后、`if (!isServer)` 之前插入：

```js
  let cleanupCanvas = null
  let cleanupOrbs = null
```

- [ ] **Step 3: 在 router.afterEach 钩子末尾追加 Canvas 路由逻辑**

在 `router.afterEach(() => {` 的回调函数**末尾**（`})` 之前）追加：

```js
      // Canvas 动效：首页注入，离开时清理
      if (to.path === '/') {
        setTimeout(() => {
          const banner = document.querySelector('.home-wrapper .banner')
          if (banner && !cleanupCanvas) {
            cleanupCanvas = initBannerCanvas(banner)
            cleanupOrbs = injectLightOrbs(banner)
          }
        }, 150)
      } else {
        if (cleanupCanvas) { cleanupCanvas(); cleanupCanvas = null }
        if (cleanupOrbs)   { cleanupOrbs();   cleanupOrbs = null }
      }
```

注意：`router.afterEach` 接收 `(to, from)` 参数，需要确认回调签名里有 `to`：

```js
router.afterEach((to) => {   // ← 确保有 to 参数
  // ... existing code ...
  // ← 追加上面的代码
})
```

- [ ] **Step 4: 启动 dev server，验证首页**

```bash
npm run start
```

验证清单：
- 打开 http://localhost:8080，Banner 区域出现节点动效
- 切换到文档页（任意一篇），节点消失
- 回到首页，节点重新出现
- 切换暗色/亮色模式，节点颜色正确响应

- [ ] **Step 5: Commit**

```bash
git add docs/.vuepress/enhanceApp.js
git commit -m "feat: inject banner canvas animation on home route"
```

---

## Task 3：更新 index.styl — Banner 背景 CSS

**Files:**
- Modify: `docs/.vuepress/styles/index.styl`

当前 `index.styl` 中 Banner 使用静态图片：
```stylus
.theme-mode-light .home-wrapper .banner{
  background: url(/img/bg-light.png) center center / cover no-repeat !important;
  ...
}
```
需要替换为网格背景 + 光晕。

- [ ] **Step 1: 替换三个主题模式下的 Banner background 规则**

找到并替换 `index.styl` 中以下三段（保留 `height: 850px`，仅替换 `background`）：

**亮色模式** — 将：
```stylus
.theme-mode-light .home-wrapper .banner{
  background: url(/img/bg-light.png) center center / cover no-repeat !important;
  height: 850px;
}
```
替换为：
```stylus
.theme-mode-light .home-wrapper .banner{
  background: #fafafa !important;
  background-image:
    linear-gradient(rgba(255,56,97,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,56,97,0.05) 1px, transparent 1px) !important;
  background-size: 38px 38px !important;
  height: 850px;
}
```

**暗色模式** — 将：
```stylus
.theme-mode-dark .home-wrapper .banner{
  background: url(/img/bg-dark.png) center center / cover no-repeat !important;
  height: 850px;
}
```
替换为：
```stylus
.theme-mode-dark .home-wrapper .banner{
  background: linear-gradient(135deg, #0d0d1a 0%, #1a0a2e 55%, #0a1628 100%) !important;
  height: 850px;
}
```

**阅读模式** — 将：
```stylus
.theme-mode-read .home-wrapper .banner{
  background: url(/img/bg-read.png) center center / cover no-repeat !important;
  height: 850px;
}
```
替换为：
```stylus
.theme-mode-read .home-wrapper .banner{
  background: linear-gradient(135deg, #0d0d1a 0%, #1a0a2e 55%, #0a1628 100%) !important;
  height: 850px;
}
```

- [ ] **Step 2: 追加亮色模式光晕 CSS（文件末尾）**

```stylus
// 亮色 Banner 装饰光晕
.banner-orb
  position: absolute
  border-radius: 50%
  pointer-events: none
  z-index: 0

.banner-orb-1
  width: 300px
  height: 300px
  background: radial-gradient(circle, rgba(255,56,97,0.1) 0%, transparent 70%)
  top: -80px
  left: -60px
  animation: orbMove1 8s ease-in-out infinite alternate

.banner-orb-2
  width: 240px
  height: 240px
  background: radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)
  bottom: -60px
  right: -40px
  animation: orbMove2 10s ease-in-out infinite alternate

@keyframes orbMove1
  from
    transform: translate(0, 0)
  to
    transform: translate(30px, 20px)

@keyframes orbMove2
  from
    transform: translate(0, 0)
  to
    transform: translate(-20px, -15px)
```

- [ ] **Step 3: 验证 Banner 背景**

Dev server 应已在运行，刷新首页：
- 亮色模式：白色底 + 细网格 + 光晕浮动
- 暗色/阅读模式：深色渐变背景

- [ ] **Step 4: Commit**

```bash
git add docs/.vuepress/styles/index.styl
git commit -m "feat: replace static banner bg with css grid and gradient"
```

---

## Task 4：更新 index.styl — Features 卡片样式

**Files:**
- Modify: `docs/.vuepress/styles/index.styl`

- [ ] **Step 1: 追加 Features 卡片基础样式（文件末尾）**

```stylus
// Features 卡片重设计
.home-wrapper .features .feature
  background: rgba(255,56,97,0.04)
  border: 1px solid rgba(255,56,97,0.12)
  border-radius: 10px
  padding: 16px 14px
  transition: all 0.25s ease
  position: relative
  overflow: hidden
  cursor: default
  box-sizing: border-box

.home-wrapper .features .feature::before
  content: ''
  position: absolute
  top: 0
  left: 0
  right: 0
  height: 2px
  background: linear-gradient(90deg, transparent, #FF3861, transparent)
  opacity: 0
  transition: opacity 0.25s ease

.home-wrapper .features .feature:hover
  transform: translateY(-3px)
  background: rgba(255,56,97,0.08)
  border-color: rgba(255,56,97,0.3)
  box-shadow: 0 8px 24px rgba(255,56,97,0.12)

.home-wrapper .features .feature:hover::before
  opacity: 1

.home-wrapper .features .feature h2
  color: #ff8fa3
  font-size: 1rem
  margin-bottom: 0.4rem

.home-wrapper .features .feature p
  color: #666
  font-size: 0.9rem
  line-height: 1.6
```

- [ ] **Step 2: 追加亮色模式 Features 覆盖**

```stylus
// 亮色模式 Features 覆盖
.theme-mode-light .home-wrapper .features .feature
  background: #fff
  border: 1px solid rgba(255,56,97,0.1)
  box-shadow: 0 2px 6px rgba(0,0,0,0.04)

.theme-mode-light .home-wrapper .features .feature:hover
  background: #fff
  border-color: rgba(255,56,97,0.25)
  box-shadow: 0 8px 20px rgba(255,56,97,0.1)

.theme-mode-light .home-wrapper .features .feature h2
  color: #FF3861

.theme-mode-light .home-wrapper .features .feature p
  color: #888
```

- [ ] **Step 3: 验证 Features 卡片**

刷新首页，鼠标 hover Features 卡片，验证：
- 卡片上浮 + 顶部高亮线出现
- 亮色/暗色模式下颜色正确
- 9 个卡片都正常显示，布局未破坏

- [ ] **Step 4: Commit**

```bash
git add docs/.vuepress/styles/index.styl
git commit -m "feat: redesign features cards with hover effects"
```

---

## Task 5：收尾检查与清理

- [ ] **Step 1: 确认 `docs/index.md` 的 `bannerBg` 设置**

```bash
grep 'bannerBg' /Users/bryan31/openSource/liteflow-homepage/docs/index.md
```

预期输出：`bannerBg: none`

若输出不是 `none`，将其修改为：
```yaml
bannerBg: none
```
然后 `git add docs/index.md && git commit -m "chore: ensure bannerBg is none"`

- [ ] **Step 2: 全路由冒烟测试**

访问以下页面，确认无报错、样式正常：
- http://localhost:8080/ — 首页（Canvas 动效 + Features 卡片）
- http://localhost:8080/pages/5816c5/ — 任意文档页（无 Canvas，样式正常）
- 切换主题模式（亮/暗/阅读）× 首页 — 三种模式下动效颜色正确

- [ ] **Step 3: 确认 .gitignore 包含 .superpowers/**

```bash
grep -n 'superpowers' /Users/bryan31/openSource/liteflow-homepage/.gitignore || echo "NOT FOUND - 需要添加"
```

如未找到，追加：

```bash
echo '.superpowers/' >> /Users/bryan31/openSource/liteflow-homepage/.gitignore
git add .gitignore
git commit -m "chore: ignore .superpowers brainstorm directory"
```

- [ ] **Step 4: 最终 Commit（如有未提交内容）**

```bash
git status
# 确认无意外文件
```
