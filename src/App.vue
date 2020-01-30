<template>
  <div id="app">
    <a-locale-provider :locale="zh_CN">
      <router-view />
    </a-locale-provider>
  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'

export default {
  data() {
    return {
      zh_CN
    }
  }
}
</script>

<style>
#app {
  height: 100%;
}
</style>
