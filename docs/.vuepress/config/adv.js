module.exports = function advHtml() {

  /**
   * 广告列表
   */
  let sidebarArray = [
    `<a name="adv" class="none" href="https://ccbpm.cn/?frm=liteFlow" target="_blank">
      <img class="no-zoom" style="width:100%;" src="/img/donate/chicheng-banner.png">
    </a>`,
    `<a name="adv" class="none" href="https://www.misboot.com/?from=LiteFlow" target="_blank">
        <img class="no-zoom" style="width:100%;" src="/img/donate/misboot-banner.png">
    </a>`,
    `<a name="adv" class="none" href="https://www.suconnect.com?hmsr=LiteFlow&hmpl=&hmcu=LiteFlow&hmkw=&hmci=" target="_blank">
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