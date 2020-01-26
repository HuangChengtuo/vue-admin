<template>
  <a-menu
    mode="inline"
    theme="dark"
    :default-selected-keys="[$route.name]"
    :inline-collapsed="collapsed"
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
</template>

<script>
import subMenu from './subMenu'
import { mapState } from 'vuex'

export default {
  components: { subMenu },
  computed: {
    ...mapState(['collapsed'])
  },
  methods: {
    menuClick(obj) {
      if (this.$route.name !== obj.key) {
        this.$router.push({ name: obj.key })
      }
    }
  }
}
</script>
