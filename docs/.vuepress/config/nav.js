module.exports = [
  { text: "首页", link: "/" },
  {
    text: "文档",
    link: "/pages/5816c5/",
    match: [
      "^/05\\.",
      "^/0[6-9]\\.v",
      "^/1[05]\\.",
      "^/(20|30)\\.",
      "^/whats new/",
      "^/2\\.\\d",
      "^/升级到",
      "^/专题解释",
    ],
    items: [
      { text: "v2.16.0 (当前版本)", link: "/pages/5816c5/" },
      {
        text: "What's New",
        items: [
          { text: "What' s New In LiteFlow v2.16.0?", link: "/pages/8ff029/" },
        ],
      },
      {
        text: "历史版本",
        items: [
          { text: "v2.15.X", link: "/pages/v2.15.X/5816c5/" },
          { text: "v2.13.X", link: "/pages/v2.13.X/5816c5/" },
          { text: "v2.12.X", link: "/pages/v2.12.X/5816c5/" },
          { text: "v2.11.X", link: "/pages/v2.11.X/5816c5/" },
          { text: "v2.10.X", link: "/pages/v2.10.X/5816c5/" },
          { text: "v2.9.X", link: "/pages/v2.9.X/5816c5/" },
          { text: "v2.8.X", link: "/pages/v2.8.X/5816c5/" },
        ],
      },
      {
        text: "升级指南",
        items: [
          { text: "2.13.0升级指南", link: "/pages/88c2f5/" },
          { text: "2.12.4升级指南", link: "/pages/88c2f1/" },
          { text: "2.12.0升级指南", link: "/pages/88c2f2/" },
          { text: "升级到2.9.3说明", link: "/pages/88c2f4/" },
          { text: "升级到2.9.X说明", link: "/pages/88c2f3/" },
          { text: "升级到2.8.X说明", link: "/pages/88c2e2/" },
          { text: "升级到2.7.X说明", link: "/pages/4848b9/" },
        ],
      },
    ],
  },
  { text: "AI Agent", link: "/pages/agent-overview/", match: "^/06\\.AI" },
  {
    text: "AI Skill",
    link: "/pages/how2use-liteflow/",
    match: "^/how2use-liteflow",
  },
  {
    text: "IDEA 插件",
    link: "/pages/liteflow-helper/",
    match: "^/liteflow-helper",
  },
  {
    text: "社区",
    match: [
      "^/(参与开发|项目成员|更新记录|用户|问答|加入社区讨论|关于项目)",
      "^/支持/",
    ],
    items: [
      {
        text: "答疑解惑",
        items: [
          { text: "常见问题", link: "/pages/845dff/" },
          { text: "如何理解上下文这个概念？", link: "/pages/e1e61f/" },
          { text: "Slot是一个什么样的概念？", link: "/pages/ad60b4/" },
        ],
      },
      {
        text: "项目与社区",
        items: [
          { text: "项目介绍", link: "/pages/8d7f1e/" },
          { text: "项目成员", link: "/pages/ae4d66/" },
          { text: "更新记录", link: "/pages/88c2d1/" },
          { text: "参与开发", link: "/pages/ae4dd5/" },
          { text: "加入群聊", link: "/pages/73c2c3/" },
          { text: "谁在使用", link: "/pages/9b9f41/" },
        ],
      },
    ],
  },
  { text: "赞助", link: "/pages/fb599d/" },
];
