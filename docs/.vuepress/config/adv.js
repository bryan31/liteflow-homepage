module.exports = function advHtml() {

  /**
   * 广告列表
   */
  let sidebarArray = [
    `<a name="adv" class="none" href="https://xiaonuo.vip" target="_blank">
      <img class="no-zoom" style="width:100%;" src="/img/donate/snowy-banner.jpg">
    </a>`,
    `<a name="adv" class="none" href="http://www.yunchengxc.com/" target="_blank">
      <img class="no-zoom" style="width:100%;" src="/img/donate/yuncheng-banner.png">
    </a>`,
    `<a name="adv" class="none" href="https://ccbpm.cn/?frm=liteFlow" target="_blank">
      <img class="no-zoom" style="width:100%;" src="/img/donate/chicheng-banner.png">
    </a>`,
    `<a name="adv" class="none" href="https://www.learun.cn?fuid=03" target="_blank">
        <img class="no-zoom" style="width:100%;" src="/img/donate/liruan-banner.jpg">
    </a>`,
    `<a name="adv" class="none" href="https://www.misboot.com/?from=LiteFlow" target="_blank">
        <img class="no-zoom" style="width:100%;" src="/img/donate/misboot-banner.png">
    </a>`,
    `<a name="adv" class="none" href="https://www.jnpfsoft.com/index.html?from=liteflow" target="_blank">
        <img class="no-zoom" style="width:100%;" src="/img/donate/yinmai-banner.png">
    </a>`,
    `<a name="adv" class="none" href="https://www.mingdao.com?s=utm_49=utm_source=liteflow&utm_medium=banner&utm_campaign=%E5%93%81%E7%89%8C%E6%8E%A8%E5%B9%BF&utm_content=IT%E8%B5%8B%E8%83%BD%E4%B8%9A%E5%8A%A1" target="_blank">
        <img class="no-zoom" style="width:100%;" src="/img/donate/mdy-banner.png">
    </a>`,
    `<a name="adv" class="none" href="https://www.suconnect.com" target="_blank">
        <img class="no-zoom" style="width:100%;" src="/img/donate/suzhong-banner-1.jpg">
    </a>`
  ]

  let _html = `<div style="width:230px;margin:0 auto;display:flex;flex-direction: column;"> 
                ${sidebarArray.join("")}
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