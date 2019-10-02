<template>
  <div id="app">
    <a-locale-provider :locale="zh_CN">
      <router-view />
    </a-locale-provider>
  </div>
</template>
<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'

export default {
  data() {
    return {
      zh_CN
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
