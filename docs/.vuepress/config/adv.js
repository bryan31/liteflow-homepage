module.exports = function advHtml() {

  /**
   * 广告列表
   */
  let sidebarArray = [
    `<a name="adv" class="none" href="https://gitee.com/dromara/MaxKey" target="_blank">
      <img class="no-zoom" style="width:100%;" src="/img/donate/maxkey-banner.png">
    </a>`,
    `<a name="adv" class="none" href="https://xiaonuo.vip" target="_blank">
      <img class="no-zoom" style="width:100%;" src="/img/donate/snowy-banner.jpg">
    </a>`,
    `<a name="adv" class="none" href="http://www.yunchengxc.com/" target="_blank">
      <img class="no-zoom" style="width:100%;" src="/img/donate/yuncheng-banner.png">
    </a>`,
    `<a name="adv" class="none" href="http://103.118.41.167:53000/" target="_blank">
      <img class="no-zoom" style="width:100%;" src="/img/donate/ai4u-banner.png">
    </a>`
  ]

  /**
   * 必然显示的广告列表
   */
  let mustShowArray = [
    `<a name="adv_must" href="https://www.mingdao.com/event/mpc/2023" target="_blank">
        <img class="no-zoom" style="width:100%;" src="/img/donate/mdy-banner.gif">
    </a>`,
    `<a name="adv_must" href="https://www.learun.cn?fuid=03" target="_blank">
        <img class="no-zoom" style="width:100%;" src="/img/donate/liruan-banner.jpg">
    </a>`
  ]

  let _html = `<div style="width:230px;margin:0 auto;display:flex;flex-direction: column;"> 
                ${mustShowArray.concat(sidebarArray).join("")}
                <div style="order: 9999;">
                  <br/> 
                  <span style='color: gray;font-size: smaller;'>广告采用随机轮播方式显示</span>
                  <span style='color: #E01E5A;font-size: smaller;font-weight: bolder;float: right'>❤️<a href='/pages/fb599d/'>成为赞助商</a></span>
                  <br/>
                </div>
                <div style="order: 100000;background-color:var(--borderColor);width:100%;height:1px;margin: 30px 0px 0px 0px;position:relative;">
                  <button style='border-radius: 100%;padding: 0;text-align: center;border: none;background-color: #ff3861;cursor: pointer;position: absolute;left: calc(50% - 15px);top: -15px;height: 30px;width: 30px;color: #fff;' onclick='document.getElementById("sidebar-slot-top").style.display="none"'>收</button>
                </div>
              </div>
              `

  return _html;
}