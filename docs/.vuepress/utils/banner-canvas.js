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

export function initBannerCanvas(bannerEl) {
  const canvas = document.createElement('canvas')
  canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;'
  bannerEl.style.position = 'relative'
  bannerEl.insertBefore(canvas, bannerEl.firstChild)

  const ctx = canvas.getContext('2d')
  if (!ctx) return () => { canvas.remove() }
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
  let resizeTimer = null
  function debouncedResize() {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(resize, 150)
  }
  window.addEventListener('resize', debouncedResize)
  rafId = requestAnimationFrame(loop)

  return function cleanup() {
    cancelAnimationFrame(rafId)
    clearTimeout(resizeTimer)
    window.removeEventListener('resize', debouncedResize)
    canvas.remove()
  }
}

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
