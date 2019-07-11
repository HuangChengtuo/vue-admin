<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
            :trigger="null"
            collapsible
            v-model="collapsed"
    >
      <div class="logo" />
      <a-menu
              mode="inline"
              :openKeys="openKeys"
              @openChange="onOpenChange"
      >
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
          <a-menu-item key="1">Option 1</a-menu-item>
          <a-menu-item key="2">Option 2</a-menu-item>
          <a-menu-item key="3">Option 3</a-menu-item>
          <a-menu-item key="4">Option 4</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
          <a-menu-item key="5">Option 5</a-menu-item>
          <a-menu-item key="6">Option 6</a-menu-item>
          <a-sub-menu key="sub3" title="Submenu">
            <a-menu-item key="7">Option 7</a-menu-item>
            <a-menu-item key="8">Option 8</a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
        <a-sub-menu key="sub4">
          <span slot="title"><a-icon type="setting" /><span>Navigation Three</span></span>
          <a-menu-item key="9">Option 9</a-menu-item>
          <a-menu-item key="10">Option 10</a-menu-item>
          <a-menu-item key="11">Option 11</a-menu-item>
          <a-menu-item key="12">Option 12</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
                class="trigger"
                :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>

  export default {
    name: 'home2',
    data() {
      return {
        collapsed: false,
        rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
        openKeys: ['sub1']
      }
    },
    methods: {
      logout() {
        this.$store.commit('logout')
        this.$router.push('login')
      },
      onOpenChange (openKeys) {
        const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.openKeys = openKeys
        } else {
          this.openKeys = latestOpenKey ? [latestOpenKey] : []
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  #home {
    height: 100%;

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



  }
</style>
