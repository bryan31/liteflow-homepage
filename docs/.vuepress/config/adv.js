module.exports = function advHtml() {

  /**
   * 广告列表
   */
  let sidebarArray = [
    `<a name="adv" class="none" href="https://datayi.cn/w/xogk00Oo" target="_blank">
      <img class="no-zoom" style="width:100%;" src="/img/donate/postcat-banner.gif">
    </a>`,
    `<a name="adv" class="none" href="https://gitee.com/dromara/MaxKey" target="_blank">
      <img class="no-zoom" style="width:100%;" src="/img/donate/maxkey-banner.png">
    </a>`,
    `<a name="adv" class="none" href="https://xiaonuo.vip" target="_blank">
      <img class="no-zoom" style="width:100%;" src="/img/donate/snowy-banner.jpg">
    </a>`,
    `<a name="adv" class="none" href="http://www.yunchengxc.com/" target="_blank">
      <img class="no-zoom" style="width:100%;" src="/img/donate/yuncheng-banner.png">
    </a>`
  ]

  /**
   * 必然显示的广告列表
   */
  let mustShowArray = [
    `<a name="adv_must" href="https://www.mingdao.com?s=utm_49=utm_source=liteflow&utm_medium=banner&utm_campaign=%E5%93%81%E7%89%8C%E6%8E%A8%E5%B9%BF&utm_content=IT%E8%B5%8B%E8%83%BD%E4%B8%9A%E5%8A%A1" target="_blank">
        <img class="no-zoom" style="width:100%;" src="/img/donate/mdy-banner.png">
    </a>`,
    `<a name="adv_must" href="http://103.118.41.167:53000/" target="_blank">
    <img class="no-zoom" style="width:100%;" src="/img/donate/ai4u-banner.png">
    </a>`,
  ]

  let _html = `<div style="width:230px;margin:0 auto;display:flex;flex-direction: column;"> 
                ${mustShowArray.concat(sidebarArray).join("")}
                <div style="order: 9999;">
                  <br/> 
                  <span style='color: gray;font-size: smaller;'>广告采用随机轮播方式显示</span>
                  <span style='color: #E01E5A;font-size: smaller;font-weight: bolder;float: right'>❤️<a href='/pages/fb599d/'>成为赞助商</a></span>
                </div>
              </div>`

  return _html;
}