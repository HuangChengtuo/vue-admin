<template>

  <a-menu
          mode="inline"
          :openKeys="openKeys"
          @openChange="onOpenChange"
          style="max-width: 256px"
          theme="dark"
          v-model="selectedKeys"
  >

    <a-sub-menu key="sub1">
      <span slot="title"><a-icon type="mail"/><span>Navigation One</span></span>
      <a-menu-item key="1.1">
        <router-link to="/home/hello">
          <a-icon type="home"/>
          主页
        </router-link>
      </a-menu-item>

      <a-menu-item key="1.2">
        <router-link to="/home/about">
          <a-icon type="phone"/>
          About
        </router-link>
      </a-menu-item>

      <a-menu-item key="1.3">Option 3</a-menu-item>
      <a-menu-item key="1.4">Option 4</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <span slot="title"><a-icon type="appstore"/><span>Navigation Two</span></span>
      <a-menu-item key="2.1">Option 5</a-menu-item>
      <a-menu-item key="2.2">Option 6</a-menu-item>
      <a-sub-menu key="sub3" title="Submenu">
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
    <a-sub-menu key="sub3">
      <span slot="title"><a-icon type="setting"/><span>Navigation Three</span></span>
      <a-menu-item key="9">Option 9</a-menu-item>
      <a-menu-item key="10">Option 10</a-menu-item>
      <a-menu-item key="11">Option 11</a-menu-item>
      <a-menu-item key="12">Option 12</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script>
  export default {
    name: "Menu",
    props: {
      collapsed: Boolean
    },
    data() {
      return {
        rootSubmenuKeys: ['sub1', 'sub2', 'sub3'],
        openKeys: ['sub1'],
        collapsedOpenKeys: [],
        uncollapsedOpenKeys: [],
        selectedKeys: []
      }
    },
    watch: {
      collapsed: function () {
        if (this.collapsed) {
          this.uncollapsedOpenKeys=this.openKeys
          this.openKeys = []
        }else{
          this.openKeys=this.uncollapsedOpenKeys
        }
      },
      openKeys: function () {
        if (this.collapsed && this.openKeys.length) {
          this.collapsedOpenKeys = this.openKeys
        } else if(!this.collapsed){
          this.uncollapsedOpenKeys = this.openKeys
        }
      },
      selectedKeys: function () {
        this.uncollapsedOpenKeys = this.collapsedOpenKeys
      }
    },
    methods: {
      onOpenChange(openKeys) {
        const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.openKeys = openKeys
        } else {
          this.openKeys = latestOpenKey ? [latestOpenKey] : []
        }
      },
      test() {
        this.uncollapsedOpenKeys = this.openKeys
      }
    }
  }
</script>

<style scoped lang="scss">
  #menu {
    display: inline-block;
  }
</style>
