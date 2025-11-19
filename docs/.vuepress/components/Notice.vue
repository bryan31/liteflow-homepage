<template>
  <!-- 遮罩层，仅在居中模式下显示 -->
  <div
    v-if="showOverlay"
    class="notice-overlay"
    @click="closeAllNotifications"
  ></div>
</template>
<script>
import "element-ui/lib/theme-chalk/index.css";
import { Notification, MessageBox } from "element-ui";
export default {
  name: "Notice",
  data() {
    return {
      notifyPromise: Promise.resolve(),
      showOverlay: false,
      activeNotifications: [],
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
          id: null,
          title: "最新公告",
          content: "演示示例",
          isHtmlContent: false,
          position: "top-right", // 新增：可选 "top-right" 或 "center"
          width: null, // 新增：居中模式下的宽度
          height: null, // 新增：居中模式下的高度
        },
      ],
    },
  },
  mounted() {
    // 过滤出需要显示的通知
    this.data.filter(item => {
      if (item.id == null) return false;
      // 所有模式都检查是否在1小时内关闭过
      return !this.isNoticeRecentlyClosed(item.id);
    }).forEach((element) => {
      this.notifyPromise = this.notifyPromise.then(() => {
        const position = element.position || "top-right";
        const isCenterMode = position === "center";

        // 如果是居中模式，显示遮罩层
        if (isCenterMode) {
          this.showOverlay = true;
        }

        // 如果是居中模式，在内容中添加确认按钮
        let messageContent = element.content;
        if (isCenterMode) {
          const buttonId = `confirm-btn-${element.id}`;
          messageContent = `
            <div class="notice-center-content">
              <div class="notice-center-body">${element.content}</div>
              <div class="notice-center-footer">
                <button class="notice-confirm-btn" id="${buttonId}">确认</button>
              </div>
            </div>
          `;
        }

        const notificationInstance = Notification({
          title: element.title,
          message: messageContent,
          dangerouslyUseHTMLString: true, // 居中模式强制使用 HTML
          duration: 0,
          offset: isCenterMode ? 0 : this.initTop,
          customClass: isCenterMode ? `notice-center ${element.customClass || ''}` : element.customClass || '',
          onClose: () => {
            // 移除该通知实例
            const index = this.activeNotifications.findIndex(n => n === notificationInstance);
            if (index > -1) {
              this.activeNotifications.splice(index, 1);
            }

            // 保存关闭时间（1小时内不再显示）
            this.saveNoticeCloseTime(element.id);

            // 如果是居中模式，隐藏遮罩层
            if (isCenterMode) {
              // 如果没有活跃的通知了，隐藏遮罩层
              if (this.activeNotifications.length === 0) {
                this.showOverlay = false;
              }
            }
          },
        });

        // 保存通知实例
        this.activeNotifications.push(notificationInstance);

        // 如果是居中模式，应用自定义尺寸并绑定确认按钮事件
        if (isCenterMode) {
          this.$nextTick(() => {
            const notificationEl = notificationInstance.$el;
            if (notificationEl) {
              if (element.width) {
                notificationEl.style.width = typeof element.width === 'number' ? `${element.width}px` : element.width;
              }
              if (element.height) {
                notificationEl.style.height = typeof element.height === 'number' ? `${element.height}px` : element.height;
              }

              // 绑定确认按钮点击事件
              const confirmBtn = notificationEl.querySelector(`#confirm-btn-${element.id}`);
              if (confirmBtn) {
                confirmBtn.addEventListener('click', (e) => {
                  e.stopPropagation();
                  notificationInstance.close();
                });
              }
            }
          });
        }
      });
    });
  },
  methods: {
    // 保存通知的关闭时间
    saveNoticeCloseTime(id){
      const closeTimeData = JSON.parse(localStorage.getItem("noticeCloseTime") || "{}");
      closeTimeData[id] = Date.now();
      localStorage.setItem("noticeCloseTime", JSON.stringify(closeTimeData));
    },
    // 检查通知是否在1小时内关闭过
    isNoticeRecentlyClosed(id){
      const closeTimeData = JSON.parse(localStorage.getItem("noticeCloseTime") || "{}");
      const closeTime = closeTimeData[id];
      if (!closeTime) return false;

      const oneHourInMs = 60 * 60 * 1000; // 1小时的毫秒数
      const timePassed = Date.now() - closeTime;
      return timePassed < oneHourInMs;
    },
    closeAllNotifications() {
      // 点击遮罩层时关闭所有通知
      this.activeNotifications.forEach(notification => {
        notification.close();
      });
      this.activeNotifications = [];
      this.showOverlay = false;
    },
  },
};
</script>

<style>
/* 遮罩层样式 */
.notice-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000; /* Element UI Notification 的默认 z-index 是 2000，遮罩层也设置为 2000 */
  cursor: pointer;
}

/* 通用通知样式 */
.el-notification {
  background-color: var(--bodyBg);
  border-color: var(--borderColor);
}

/* 居中模式的通知样式 */
.el-notification.notice-center {
  left: 50% !important;
  top: 50% !important;
  transform: translate(-50%, -50%) !important;
  z-index: 2001 !important; /* 确保在遮罩层之上 */
  margin: 0 !important;
  max-width: 90vw; /* 防止在小屏幕上过宽 */
  max-height: 90vh; /* 防止在小屏幕上过高 */
  overflow: auto;
}

/* 居中模式内容布局 */
.notice-center-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.notice-center-body {
  flex: 1;
  overflow: auto;
  margin-bottom: 15px;
}

.notice-center-footer {
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
  border-top: 1px solid var(--borderColor);
}

/* 确认按钮样式 */
.notice-confirm-btn {
  padding: 8px 20px;
  background-color: #FF3861;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.notice-confirm-btn:hover {
  background-color: #e04375;
}

.notice-confirm-btn:active {
  background-color: #c03060;
}

.el-notification__title {
  border-bottom: none;
  color: var(--textColor);
}
.el-notification__content {
  color: var(--textColor);
}
.el-message-box {
  background-color: var(--bodyBg);
  border-color: var(--borderColor);
}
.el-message-box__title {
  color: var(--textColor);
}
.el-message-box__content {
  color: var(--textColor);
}
.confirmButtonClass{
  color: #FFF;
  background-color: #FF3861;
  border-color: #FF3861;
}
.confirmButtonClass:hover, .confirmButtonClass:focus{
  color: #FFF;
  background-color: #e04375;
  border-color: #e04375;
}
.cancelButtonClass{
  color: var(--textColor);
  background-color: var(--bodyBg);
  border-color: var(--borderColor);
}
.cancelButtonClass:hover, .cancelButtonClass:focus{
  color: var(--textColor);
  background-color: var(--bodyBg);
  border-color: var(--borderColor);
}
</style>