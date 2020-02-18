<template>
  <a-layout-sider id="sidebar" breakpoint="xl" width="240" :collapsed="collapsed" @breakpoint="collapseSidebar">
    <div class="title">
      <img alt="logo" src="@/assets/DD.png">
      <span v-show="!collapsed">DEMO</span>
    </div>
    <a-menu
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      :open-keys.sync="openKeys"
      :selected-keys="[$route.name]"
      @click="menuClick"
    >
      <template v-for="route of $router.options.routes">
        <template v-if="route.show">
          <!--没有 children 时-->
          <a-menu-item v-if="!route.children" :key="route.name">
            <a-icon :type="route.meta.icon || 'null'" />
            <span>{{ route.meta.title }}</span>
          </a-menu-item>
          <!--只有一个 children 时不渲染下拉框-->
          <a-menu-item v-else-if="route.children.length === 1" :key="route.children[0].name">
            <a-icon :type="route.children[0].meta.icon || 'null'" />
            <span>{{ route.children[0].meta.title }}</span>
          </a-menu-item>
          <sub-menu v-else :key="route.name" :routes="route" />
        </template>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import subMenu from './subMenu'
import { mapState } from 'vuex'

export default {
  components: { subMenu },
  data() {
    return {
      openKeys: []
    }
  },
  computed: {
    ...mapState(['collapsed'])
  },
  watch: {
    $route() {
      this.changeOpenKeys()
    }
  },
  created() {
    this.changeOpenKeys()
  },
  methods: {
    changeOpenKeys() {
      const newOpenKeys = []
      const abbr = this.$route.matched
      for (let i = 0; i < abbr.length - 1; i++) {
        newOpenKeys.push(abbr[i].name || '')
      }
      this.openKeys = this.openKeys.concat(newOpenKeys)
    },
    collapseSidebar(collapsed) {
      this.$store.commit('changeCollapsed', collapsed)
    },
    menuClick(obj) {
      if (this.$route.name !== obj.key) {
        this.$router.push({ name: obj.key })
      }
    }
  }
}
</script>

<style lang="scss">
#sidebar {
  .title {
    background: rgba(255, 255, 255, 0.2);
    height: 50px;
    margin: 15px;

    img {
      height: 50px;
      width: 50px;
    }

    span {
      color: white;
      font-size: 25px;
      font-weight: bold;
      line-height: 50px;
      margin-left: 24px;
      position: fixed;
      vertical-align: middle;
    }
  }
}
</style>
