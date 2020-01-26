<template functional>
  <a-sub-menu :key="props.routes.name">
    <span slot="title">
      <a-icon v-if="props.routes.meta.icon" :type="props.routes.meta.icon" />
      <span>{{ props.routes.meta.title }}</span>
    </span>
    <template v-for="route of props.routes.children">
      <template v-if="route.show">
        <!--判断是否有 children 再判断 children 中是否有 show-->
        <sub-menu
          v-if="route.children ? route.children.find(item => item.show) : false"
          :key="route.name"
          :routes="route"
        />
        <!--children 中没有 show-->
        <a-menu-item v-else :key="route.name">
          <a-icon v-if="route.meta.icon" :type="route.meta.icon" />
          <span>{{ route.meta.title }}</span>
        </a-menu-item>
      </template>
    </template>
  </a-sub-menu>
</template>
<script>
export default {
  name: 'SubMenu',
  props: {
    routes: {
      type: Object,
      default: null
    }
  }
}
</script>
