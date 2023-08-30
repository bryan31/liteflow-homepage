// Head Config
module.exports = [
  ['link', { rel: 'icon', href: '/img/logo.svg' }], //favicons，资源放在public文件夹
  ['meta', { name: 'keywords', content: 'liteflow,liteflow官网,规则引擎,流程引擎,开源,java规则引擎,rule engine,open source'}],
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色

  ['meta', { name: 'wwads-cn-verify', content: '6c4b761a28b734fe93831e3fb400ce87' }], // 广告相关，你可以去掉
  ['script', {async: true, src: 'https://cdn.wwads.cn/js/makemoney.js', type: 'text/javascript' }], // 广告相关，你可以去掉
  ['script', {}, `
    // 万维广告“禁止”广告拦截
    // function called if wwads is blocked
    // https://github.com/bytegravity/whitelist-wwads
    function ABDetected() {
      var adBlockDetected_div = document.createElement("div");
      document.body.appendChild(adBlockDetected_div);
      var navbar = document.querySelector(".navbar");
      navbar.style.cssText="transition:top 300ms;top:33px";
      adBlockDetected_div.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; background: #FF3861; color: #fff; z-index: 9999999999; font-size: 14px; text-align: center; line-height: 1.5; font-weight: bold; padding-top: 6px; padding-bottom: 6px;";
      adBlockDetected_div.innerHTML = "我们的广告服务商 <a style='color:#fff;text-decoration:underline' target='_blank' href='https://wwads.cn/page/end-user-privacy'>并不跟踪您的隐私</a>，为了支持本站的长期运营，请将我们的网站 <a style='color: #fff;text-decoration:underline' target='_blank' href='https://wwads.cn/page/whitelist-wwads'>加入广告拦截器的白名单</a>。";
      document.getElementsByTagName("body")[0].appendChild(adBlockDetected_div);
      // add a close button to the right side of the div
      var adBlockDetected_close = document.createElement("div");
      adBlockDetected_close.style.cssText = "position: absolute; top: 0; right: 10px; width: 30px; height: 30px; background: #FF3861; color: #fff; z-index: 9999999999; line-height: 30px; cursor: pointer;";
      adBlockDetected_close.innerHTML = "×";
      adBlockDetected_div.appendChild(adBlockDetected_close);
      // add a click event to the close button
      adBlockDetected_close.onclick = function() {
      this.parentNode.parentNode.removeChild(this.parentNode);
      navbar.style.cssText="transition:top 300ms;top:0";
      };
    }

    function vote() {
      var voteDetected_div = document.createElement("div");
      voteDetected_div.style.cssText = "position: absolute; top: 0; left: 0; width: 100%; background: #7bbfea; color: #fff; z-index: 9999999999; font-size: 14px; text-align: center; line-height: 1.5; font-weight: bold; padding-top: 6px; padding-bottom: 6px;";
      voteDetected_div.innerHTML = "<a style='color:#fff;text-decoration:underline' target='_blank' href='xxxxxx'>LiteFlow 正在参与“2021年度 OSC 中国开源项目”评选，请为我们投上宝贵的一票，谢谢！</a>";
      document.getElementsByTagName("body")[0].appendChild(voteDetected_div);
      voteDetected_div.onclick = function() {
        this.remove();
      };
    }

    function docReady(t) {
      "complete" === document.readyState ||
      "interactive" === document.readyState
        ? setTimeout(t, 1)
        : document.addEventListener("DOMContentLoaded", t);
    }

    //check if wwads' fire function was blocked after document is ready with 3s timeout (waiting the ad loading)
    docReady(function () {
      setTimeout(function () {
        if( window._AdBlockInit === undefined ){
            ABDetected();
        }
      }, 3000);
    });
    
    console.log("%c 人不一定要逆风翻盘，但一定要向阳而生 %c", "color: #ffffff; background: #f1404b; padding:5px 0;", "background: #030307; padding:5px 0;");
  `]
];
