<template>
    
</template>
<script>
import "element-ui/lib/theme-chalk/index.css";
import { Notification } from "element-ui";
export default {
  name: "Notice",
  data() {
    return {
      notifyPromise: Promise.resolve(),
    };
  },
  props: {
    initTop: {
      type: Number,
      default: 55,
    },
    data: {
      type: Array,
      default: [
        {
          title: "最新公告",
          content: "演示示例",
          isHtmlContent: false,
        },
      ],
    },
  },
  mounted() {
    console.log(this.data);
    this.data.forEach((element) => {
      this.notifyPromise = this.notifyPromise.then(() => {
        Notification({
          title: element.title,
          message: element.content,
          dangerouslyUseHTMLString: element.isHtmlContent || false,
          duration: 0,
          offset: this.initTop,
        });
      });
    });
  },
};
</script>

<style>
.el-notification{
  background-color: var(--bodyBg);
  border-color: var(--borderColor);
}
.el-notification__title {
  border-bottom: none;
  color: var(--textColor);
}
.el-notification__content {
  color: var(--textColor);
}
</style>