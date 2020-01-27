<template>
  <a-layout id="components-layout-demo-basic">
    <sidebar />
    <a-layout>
      <header-bar />
      <a-layout-content>
        <transition mode="out-in">
          <router-view />
        </transition>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import sidebar from './components/sidebar/index'
import headerBar from './components/header'

export default {
  components: { sidebar, headerBar }
}
</script>

<style lang="scss">
#components-layout-demo-basic {
  height: 100%;

  .ant-layout-content {
    background: #f0f2f5;
    padding: 24px;
  }
}
</style>
