<template>
  <a-layout class="layout">
    <a-layout-sider
      v-model="collapsed"
      :trigger="null"
      collapsible
      width="256px"
    >
      <a-affix :offset-top="20">
        <Menu :collapsed="collapsed" />
      </a-affix>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> this.$store.commit('changeCollapsed')"
        />
        <Breadcrumb />
        <Avatar />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>

import Menu from '@/components/Menu'
import Avatar from '@/components/Avatar'
import Breadcrumb from '@/components/Breadcrumb'
import {mapState} from 'vuex'

export default {
  name: "Layout",
  components: {Avatar, Menu, Breadcrumb},
  data() {
    return {}
  },
  computed: {
    ...mapState(['collapsed'])
  }
}
</script>

<style scoped lang="scss">
.layout {
  min-height: 100%;
}

.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;

  :hover {
    color: #1890ff;
  }
}
</style>
