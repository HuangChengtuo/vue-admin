<template>
  <a-layout id="components-layout-demo-basic">
    <a-layout-sider breakpoint="xl" width="240" :collapsed="collapsed" @breakpoint="collapseSidebar">
      <sidebar />
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <a-icon class="fold-icon" :type="foldIcon" @click="collapseSidebar(!collapsed)" />
        Header
      </a-layout-header>
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import sidebar from './components/sidebar/menu'
import { mapState } from 'vuex'

export default {
  components: { sidebar },
  computed: {
    ...mapState(['collapsed']),
    foldIcon() {
      return this.collapsed ? 'menu-unfold' : 'menu-fold'
    }
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

  .ant-layout-header {
    background: white;
    padding: 0 24px;

    .fold-icon {
      font-size: 20px;
      margin-right: 12px;
    }
  }

  .ant-layout-content {
    background: rgba(16, 142, 233, 1);
  }
}
</style>
