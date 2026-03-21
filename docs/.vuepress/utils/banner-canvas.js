// docs/.vuepress/utils/banner-canvas.js
// Swirl particle animation — replaces node/dashed-line effect

// ─── 1. Simplex Noise (Stefan Gustavson, public domain) ──────────────────
const _p = [151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,
  8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,
  57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,
  77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,
  65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,
  164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,
  207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,
  221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,
  218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,
  107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,
  205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180]
const _perm = new Uint8Array(512)
const _permMod12 = new Uint8Array(512)
for (let i = 0; i < 512; i++) { _perm[i] = _p[i & 255]; _permMod12[i] = _perm[i] % 12 }
const _grad3 = [
  [1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],
  [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],
  [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1],
]
function _dot3(g, x, y, z) { return g[0]*x + g[1]*y + g[2]*z }
function noise3D(xin, yin, zin) {
  const F3 = 1/3, G3 = 1/6
  const s = (xin+yin+zin)*F3
  const i = Math.floor(xin+s), j = Math.floor(yin+s), k = Math.floor(zin+s)
  const t = (i+j+k)*G3
  const x0=xin-(i-t), y0=yin-(j-t), z0=zin-(k-t)
  let i1,j1,k1,i2,j2,k2
  if (x0>=y0) {
    if (y0>=z0)      { i1=1;j1=0;k1=0;i2=1;j2=1;k2=0 }
    else if (x0>=z0) { i1=1;j1=0;k1=0;i2=1;j2=0;k2=1 }
    else             { i1=0;j1=0;k1=1;i2=1;j2=0;k2=1 }
  } else {
    if (y0<z0)       { i1=0;j1=0;k1=1;i2=0;j2=1;k2=1 }
    else if (x0<z0)  { i1=0;j1=1;k1=0;i2=0;j2=1;k2=1 }
    else             { i1=0;j1=1;k1=0;i2=1;j2=1;k2=0 }
  }
  const x1=x0-i1+G3, y1=y0-j1+G3, z1=z0-k1+G3
  const x2=x0-i2+2*G3, y2=y0-j2+2*G3, z2=z0-k2+2*G3
  const x3=x0-1+3*G3, y3=y0-1+3*G3, z3=z0-1+3*G3
  const ii=i&255, jj=j&255, kk=k&255
  const gi0=_permMod12[ii+_perm[jj+_perm[kk]]]
  const gi1=_permMod12[ii+i1+_perm[jj+j1+_perm[kk+k1]]]
  const gi2=_permMod12[ii+i2+_perm[jj+j2+_perm[kk+k2]]]
  const gi3=_permMod12[ii+1+_perm[jj+1+_perm[kk+1]]]
  let t0=0.6-x0*x0-y0*y0-z0*z0
  const n0=t0<0 ? 0 : (t0*=t0, t0*t0*_dot3(_grad3[gi0],x0,y0,z0))
  let t1=0.6-x1*x1-y1*y1-z1*z1
  const n1=t1<0 ? 0 : (t1*=t1, t1*t1*_dot3(_grad3[gi1],x1,y1,z1))
  let t2=0.6-x2*x2-y2*y2-z2*z2
  const n2=t2<0 ? 0 : (t2*=t2, t2*t2*_dot3(_grad3[gi2],x2,y2,z2))
  let t3=0.6-x3*x3-y3*y3-z3*z3
  const n3=t3<0 ? 0 : (t3*=t3, t3*t3*_dot3(_grad3[gi3],x3,y3,z3))
  return 32*(n0+n1+n2+n3)
}

// ─── 2. Math utilities ────────────────────────────────────────────────────
const TAU = Math.PI * 2
const rand = n => Math.random() * n
const lerp = (a, b, t) => (1 - t) * a + t * b
function fadeInOut(t, m) {
  const hm = m * 0.5
  return Math.abs((t + hm) % m - hm) / hm
}
function isDarkTheme() {
  const cls = document.documentElement.classList
  return cls.contains('theme-mode-dark') || cls.contains('theme-mode-read')
}

// ─── 3. Constants ─────────────────────────────────────────────────────────
const PARTICLE_COUNT = 700
const PROP_COUNT     = 9   // x, y, vx, vy, life, ttl, speed, radius, hue
const PROPS_LEN      = PARTICLE_COUNT * PROP_COUNT

const BASE_TTL    = 50
const RANGE_TTL   = 150
const BASE_SPEED  = 0.1
const RANGE_SPEED = 2
const BASE_RADIUS = 1
const RANGE_RADIUS = 4
const RANGE_Y     = 100   // max px offset from banner vertical center on respawn

const X_OFF       = 0.00125
const Y_OFF       = 0.00125
const Z_OFF       = 0.0005
const NOISE_STEPS = 8

// Dark / read mode
const DARK_BASE_HUE  = 320
const DARK_HUE_RANGE = 70   // 320–390 (wraps: pink→red→orange-red)

// Light mode
const LIGHT_BASE_HUE  = 330
const LIGHT_HUE_RANGE = 30  // 330–360 (pure brand pink)
const LIGHT_MAX_ALPHA = 0.35

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
