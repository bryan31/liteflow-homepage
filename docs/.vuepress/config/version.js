const versions = [
    { pre: "pages/master",  text: "2.11.2（当前版本）"  },
    { pre: "pages/v2.10.X", text: "2.10.x" },
    { pre: "pages/v2.9.X",  text: "2.9.x" },
    { pre: "pages/v2.8.X",  text: "2.8.x" },
    { pre: "pages/v2.7.X",  text: "2.7.x" },
    { pre: "pages/v2.6.X",  text: "2.6.x" }
];
const latest = versions[0];

const whatsnew = [
    {
        text: "What\' s New In LiteFlow v2.11.2?",
        link: "/pages/8ff014/"
    }
]

module.exports = {
    versions, latest, whatsnew
}