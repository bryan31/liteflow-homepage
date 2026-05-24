const assert = require('assert')
const fs = require('fs')
const path = require('path')
const vm = require('vm')

const sourcePath = path.join(__dirname, '..', 'docs', '.vuepress', 'utils', 'banner-canvas.js')
const source = fs.readFileSync(sourcePath, 'utf8')
  .replace(/export function initBannerCanvas/g, 'function initBannerCanvas')
  .replace(/export function injectLightOrbs/g, 'function injectLightOrbs')

const sandbox = {
  module: { exports: {} },
  exports: {},
  console,
  Math,
  Float32Array,
  Uint8Array,
  setTimeout,
  clearTimeout,
  requestAnimationFrame: () => 0,
  cancelAnimationFrame: () => {},
  window: {
    innerHeight: 900,
    addEventListener: () => {},
    removeEventListener: () => {}
  },
  document: {
    documentElement: { classList: { contains: () => false } }
  },
  getComputedStyle: () => ({ getPropertyValue: () => '#FF3861' })
}

vm.runInNewContext(`${source}\nmodule.exports = __test__`, sandbox)

const {
  computeEmitterY,
  createRespawnState,
  computeFlowVector
} = sandbox.module.exports

assert.strictEqual(
  computeEmitterY(1400, { top: 60 }, 900),
  816,
  'emitter should sit just above the first screen bottom, not the banner center'
)

const centered = createRespawnState(1200, 816, () => 0.5)
assert.ok(centered.x >= 420 && centered.x <= 780, 'respawn x should start near the center beam')
assert.ok(centered.y >= 804 && centered.y <= 828, 'respawn y should stay near first screen bottom')

const vector = computeFlowVector({
  x: 600,
  y: 760,
  vx: 0,
  vy: 0,
  speed: 3
}, 1200, 600, 1, () => 0)

assert.ok(vector.vy < -0.5, 'particle velocity should be biased upward')
assert.ok(vector.y2 < 760, 'particle should move upward on the next frame')
