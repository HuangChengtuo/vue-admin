<template>
  <a-breadcrumb style="display: inline" :routes="this.$route.matched">
    <template slot="itemRender" slot-scope="{route}">
      <span class="breadcrumb">{{ route.meta.title }}</span>
    </template>
  </a-breadcrumb>
</template>

<script>
  export default {
    name: "Breadcrumb"
  }
</script>

<style scoped>
  .breadcrumb {
    font-size: 20px;
    font-weight: bold;
    color: black;
  }
</style>
