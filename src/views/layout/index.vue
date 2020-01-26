<template>
  <a-layout id="components-layout-demo-basic">
    <sidebar />
    <a-layout>
      <a-layout-header>
        <a-icon class="fold-icon" :type="foldIcon" @click="collapseSidebar(!collapsed)" />
        <a-breadcrumb>
          <template v-for="route of $route.matched">
            <a-breadcrumb-item v-if="route.meta.title" :key="route.name">
              <a-icon v-if="route.meta.icon" :type="route.meta.icon" />
              <span>{{ route.meta.title }}</span>
            </a-breadcrumb-item>
          </template>
        </a-breadcrumb>
      </a-layout-header>
      <a-layout-content>
        <transition>
          <router-view />
        </transition>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import sidebar from './components/sidebar/index'
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

<style lang="scss">
#components-layout-demo-basic {
  height: 100%;

  .ant-layout-header {
    background: white;
    padding: 0 24px;

    .fold-icon {
      font-size: 20px;
      margin-right: 24px;
    }

    .ant-breadcrumb {
      display: inline-block;
    }
  }

  .ant-layout-content {
    background: #f0f2f5;
    padding: 24px;
  }
}
</style>
