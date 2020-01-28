<template>
  <a-layout id="layout">
    <sidebar />
    <a-layout>
      <header-bar />
      <transition mode="out-in">
        <router-view />
      </transition>
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
#layout {
  height: 100%;
}
</style>
