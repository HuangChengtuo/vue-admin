<template>
  <a-layout id="components-layout-demo-basic">
    <a-layout-sider breakpoint="xl" :collapsed="collapsed" @breakpoint="collapseSidebar">Sidebar</a-layout-sider>
    <a-layout>
      <a-layout-header>
        <a-button @click="collapseSidebar(!collapsed)">!!</a-button>
        Header
      </a-layout-header>
      <a-layout-content>Content</a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['collapsed'])
  },
  methods: {
    collapseSidebar(collapsed) {
      this.$store.commit('changeCollapsed', collapsed)
    }
  }
}
</script>

<style lang="scss" scoped>
#components-layout-demo-basic {
  height: 100%;

  .ant-layout-sider {
    background: #3ba0e9;
  }

  .ant-layout-header {
    background: #7dbcea;
    padding: 0 24px;
  }

  .ant-layout-content {
    background: rgba(16, 142, 233, 1);
  }
}
</style>
