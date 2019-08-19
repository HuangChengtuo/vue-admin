<template>
<span>
  <div class="logo">
        <img alt="logo" src="../assets/DD.png"/>
        <span v-show="!collapsed">DEMO</span>
      </div>
  <a-menu
          mode="inline"
          :openKeys="openKeys"
          @openChange="onOpenChange"
          style="max-width: 256px"
          theme="dark"
          v-model="selectedKeys"
  >
    <a-menu-item key="home">
      <router-link to="/home">
        <span><a-icon type="home"/><span>首页</span></span>
      </router-link>
    </a-menu-item>


    <a-sub-menu key="sub1">
      <span slot="title"><a-icon type="shop"/><span>销售</span></span>
      <a-menu-item key="salesStatements">
        <router-link to="/sales/salesStatements">
          <a-icon type="line-chart"/>
          销售报表
        </router-link>
      </a-menu-item>
      <a-menu-item key="2.2">
        <a-icon type="copy" />
        订单管理
      </a-menu-item>
    </a-sub-menu>

    <a-sub-menu key="sub2">
      <span slot="title"><a-icon type="pay-circle" /><span>财务</span></span>
      <a-menu-item key="9">Option 9</a-menu-item>
      <a-menu-item key="10">Option 10</a-menu-item>
      <a-menu-item key="11">Option 11</a-menu-item>
      <a-menu-item key="12">Option 12</a-menu-item>
    </a-sub-menu>

    <a-sub-menu key="sub3">
      <span slot="title"><a-icon type="user"/><span>个人中心</span></span>
      <a-menu-item key="information">
        <router-link to="/user/information">
          <a-icon type="idcard"/>个人资料
        </router-link>
      </a-menu-item>
      <a-menu-item key="about">
        <router-link to="/user/about">
          <a-icon type="phone"/>About
        </router-link>
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
  </span>
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
        selectedKeys: [this.$route.name]
      }
    },
    watch: {
      collapsed: function () {
        if (this.collapsed) {
          this.uncollapsedOpenKeys = this.openKeys
          this.openKeys = []
        } else {
          this.openKeys = this.uncollapsedOpenKeys
        }
      },
      openKeys: function () {
        if (this.collapsed && this.openKeys.length) {
          this.collapsedOpenKeys = this.openKeys
        } else if (!this.collapsed) {
          this.uncollapsedOpenKeys = this.openKeys
        }
      },
      selectedKeys: function () {
        this.uncollapsedOpenKeys = this.collapsedOpenKeys
      },
      $route: function () {
        this.selectedKeys = [this.$route.name]
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
  .logo {
    height: 48px;
    background: rgba(255, 255, 255, .2);
    margin: 16px;
    color: white;

    span {
      margin: {
        left: 24px;
      };
    }

    img {
      height: 100%;
      padding-left: 2px;
    }
  }
</style>
