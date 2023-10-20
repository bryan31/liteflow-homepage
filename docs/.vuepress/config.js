const head = require('./config/head.js'); // 广告插件检测
const themeConfig = require('./config/themeConfig.js');
const plugins = require('./config/plugins.js');

module.exports = {

  theme: 'vdoing', // 使用依赖包主题
  base: "/",
  head,
  themeConfig,
  plugins,

  markdown: {
    lineNumbers: false,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.js',
    '.vuepress/config/head.js',
    '.vuepress/config/htmlModules.js',
    '.vuepress/config/nav.js',
    '.vuepress/config/plugins.js',
    '.vuepress/config/themeConfig.js',
  ],

  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/en-us/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'LiteFlow',
      description: 'A lightweight, fast, stable and configurable component-based rule engine'
    },
    '/': {
      lang: 'zh-CN',
      title: "LiteFlow",
      description: '一个轻量，快速，稳定可编排的组件式规则引擎' 
    }
  }
}
