<template>
  <div id="error-page">
    <div class="dialog">
      <div class="title">{{ title }}</div>
      <div class="text">{{ text }}</div>
      <div class="btn-row">
        <a-button @click="go('homePage')">回到首页</a-button>
        <a-button v-if="$route.name === 'noPermission'" ghost type="danger" @click="go('login')">
          切换账号
        </a-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'ERROR!',
      text: '不知怎么就出错了'
    }
  },
  watch: {
    '$route.name': {
      handler(name) {
        if (name === '404') {
          this.title = '404 not found'
          this.text = '访问的页面不存在或已被删除'
        }
        if (name === 'noPermission') {
          this.title = 'No Permission'
          this.text = '您暂时没有访问页面的权限'
        }
      },
      immediate: true
    }
  },
  methods: {
    go(name) {
      this.$router.push({ name })
    }
  }
}
</script>
<style lang="scss">
#error-page {
  width: 950px;
  height: 765px;
  margin: 0 auto;
  background: url("~@/assets/404.jpg") no-repeat;
  position: relative;
  animation: fade-in 1s;

  .dialog {
    text-align: center;
    width: 300px;
    height: 160px;
    position: absolute;
    left: 50%;
    top: 110px;
    transform: translate(-50%, 0);
    animation: dialog-slide-in 1s;

    .title {
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 12px;
    }

    .text {
      font-size: 18px;
    }

    .btn-row {
      position: absolute;
      width: 100%;
      bottom: 0;

      .ant-btn {
        margin: 0 12px;
      }
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes dialog-slide-in {
    0% {
      transform: translate(-50%, 30px);
      opacity: 0;
    }
    100% {
      transform: translate(-50%, 0);
      opacity: 1;
    }
  }
}
</style>
