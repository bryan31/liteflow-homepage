# LiteFlow 首页重设计规格文档

**日期：** 2026-03-21
**状态：** 已批准

---

## 背景与目标

LiteFlow 官网首页目前使用视频作为背景，流量消耗较大。同时首页的 Features 卡片区域视觉较为平淡。本次重设计目标：

1. 用轻量的 Canvas 动效替换视频背景，实现零额外流量消耗
2. 重新设计 Features 卡片样式，提升视觉品质
3. 不破坏 vdoing 主题结构，改动范围可控

---

## 技术约束

- 框架：VuePress 1.x + vdoing 主题
- 主题色：`#FF3861`（已在 `palette.styl` 定义为 `$accentColor`）
- 支持三种主题模式：亮色（`theme-mode-light`）、暗色（`theme-mode-dark`）、阅读（`theme-mode-read`）
- 不覆盖主题组件，不修改主题配置

---

## 视觉方向

**风格：暗黑科技流**

- 节点（圆点）在 Banner 区域内缓慢随机漂移
- 节点间距小于阈值时绘制流动虚线连接
- 暗色/阅读模式：红色发光节点 + 径向渐变光晕
- 亮色模式：细网格背景 + 透明度较低的节点，无光晕

---

## 改动范围

仅涉及以下三个文件：

| 文件 | 改动内容 |
|------|---------|
| `docs/.vuepress/enhanceApp.js` | 新增首页 Canvas 动效注入逻辑 |
| `docs/.vuepress/styles/index.styl` | 移除 Banner 静态背景图；新增 Features 卡片样式 |
| `docs/index.md` | `bannerBg` 保持 `none`，frontmatter 其余内容不动 |

---

## Canvas 动效系统设计

### 注入方式

在 `enhanceApp.js` 的 `router.afterEach` 钩子中，检测当前路由是否为首页（`route.path === '/'`）。若是，等待 DOM 就绪后将 `<canvas>` 元素插入 `.home-wrapper .banner` 中，并启动动画循环。离开首页时调用 `cancelAnimationFrame` 停止循环，移除 canvas 元素。

### 节点系统

- 数量：约 25 个节点
- 初始位置：随机分布于 Banner 区域
- 每个节点独立属性：
  - `r`：半径 2.5～5px，随机
  - `vx / vy`：漂移速度，范围 ±0.4px/帧
  - `phase`：正弦扰动相位偏移（`0 ~ 2π`），使运动更自然
  - `baseAlpha`：基础透明度
- 运动公式：
  ```
  x += vx + sin(t * 0.0005 + phase) * 0.15
  y += vy + cos(t * 0.0004 + phase * 1.3) * 0.15
  ```
- 边缘行为：到达 Banner 边缘时速度分量反向（软反弹）

### 节点渲染

- 呼吸脉冲：`pulse = sin(t * 0.001 + phase) * 0.3 + 0.7`，作用于半径和透明度
- 暗色/阅读模式：额外绘制径向渐变光晕（半径 4 倍于节点）
- 亮色模式：仅绘制实心圆点，无光晕

### 连线系统

- 距离阈值：140px
- 透明度：`(1 - dist / threshold) * maxAlpha`，距离越近越不透明
- 线型：虚线 `[5, 4]`，`dashOffset` 每帧递增 0.3，产生流动效果
- 颜色统一使用 `rgba(255, 56, 97, alpha)`

### 主题响应

- 通过 `MutationObserver` 监听 `<html>` 元素的 `class` 属性变化
- 检测 `theme-mode-dark`、`theme-mode-light`、`theme-mode-read`
- 主题切换时更新 Canvas 颜色参数，无需重建节点

### 性能

- `requestAnimationFrame` 驱动
- Canvas 尺寸跟随 Banner 元素，监听 `window.resize` 重置
- 路由离开首页时完整清理（`cancelAnimationFrame` + DOM 移除 + `MutationObserver` 断开）

---

## Features 卡片样式设计

通过 `index.styl` 覆盖 vdoing 主题的 `.feature` 类样式，无需修改主题源码。

### 交互效果

- **Hover 上浮**：`transform: translateY(-3px)`，过渡时长 `0.25s ease`
- **顶部高亮线**：`::before` 伪元素，`height: 2px`，渐变色 `transparent → #FF3861 → transparent`，hover 时 `opacity: 1`
- **边框高亮**：`border-color` 过渡到 `rgba(255,56,97,0.3)`

### 暗色模式样式

```
背景：rgba(255, 56, 97, 0.04)
边框：1px solid rgba(255, 56, 97, 0.12)
圆角：10px
Hover 阴影：0 8px 24px rgba(255,56,97,0.12)
标题色：#ff8fa3
描述色：#666
```

### 亮色模式样式

```
背景：#ffffff
边框：1px solid rgba(255, 56, 97, 0.1)
阴影：0 2px 6px rgba(0,0,0,0.04)
圆角：10px
Hover 阴影：0 8px 20px rgba(255,56,97,0.1)
标题色：#FF3861
描述色：#888
```

---

## 亮色模式 Banner 背景

移除静态图片 `bg-light.png`，替换为：

- CSS 网格背景：`rgba(255,56,97,0.05)` 细线，间距 38px
- 两个径向渐变光晕装饰，使用额外的 `<div class="light-orb1">` / `<div class="light-orb2">` 实现（不使用伪元素，避免与 Features 卡片的 `::before` 选择器冲突）
- Canvas 节点透明度整体降低（`baseAlpha × 0.6`）

---

## 不在本次范围内

- 首页 Markdown 内容区（赞助商、版本号、架构图等）保持不变
- 导航栏样式不变
- 文档内容页不变
- 移动端适配（Canvas 在小屏幕下可选降级为静态背景）
