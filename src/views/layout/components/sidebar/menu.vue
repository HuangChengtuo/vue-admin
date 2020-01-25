<template>
  <a-menu mode="inline" theme="dark" :inline-collapsed="collapsed">
    <template v-for="route of $router.options.routes">
      <template v-if="route.show">
        <!--没有 children 时-->
        <a-menu-item v-if="!route.children" :key="route.path">
          <a-icon :type="route.meta.icon || 'null'" />
          <span>{{ route.meta.title }}</span>
        </a-menu-item>
        <!--只有一个 children 时不渲染下拉框-->
        <a-menu-item v-else-if="route.children.length === 1" :key="route.path">
          <a-icon :type="route.children[0].meta.icon || 'null'" />
          <span>{{ route.children[0].meta.title }}</span>
        </a-menu-item>
        <sub-menu v-else :key="route.path" :routes="route" />
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
  created() {
    console.log(this.$router.options.routes)
  }
}
</script>
