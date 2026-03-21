// docs/.vuepress/utils/banner-canvas.js
// Swirl particle animation — replaces node/dashed-line effect

// ─── 1. Simplex Noise (inline) ─────────────────────────────────────────────

// ─── 2. Math utilities ────────────────────────────────────────────────────

// ─── 3. Constants ─────────────────────────────────────────────────────────

// ─── 4. Particle helpers ──────────────────────────────────────────────────

// ─── 5. Canvas setup ──────────────────────────────────────────────────────

// ─── 6. Render pipeline ───────────────────────────────────────────────────

// ─── 7. Main draw loop ────────────────────────────────────────────────────

// ─── 8. Public API ────────────────────────────────────────────────────────

export function initBannerCanvas(bannerEl) {
  // TODO
  return function cleanup() {}
}

export function injectLightOrbs(bannerEl) {
  const orb1 = document.createElement('div')
  orb1.className = 'banner-orb banner-orb-1'
  const orb2 = document.createElement('div')
  orb2.className = 'banner-orb banner-orb-2'
  bannerEl.appendChild(orb1)
  bannerEl.appendChild(orb2)
  return function cleanup() { orb1.remove(); orb2.remove() }
}
