<template>
  <a-layout id="home">
    <a-layout-sider
            :trigger="null"
            collapsible
            v-model="collapsed"
            width="256px"
    >
      <div class="logo">
        <img alt="logo" src="../assets/DD.png"/>
        <span v-show="!collapsed">DEMO</span>
      </div>
      <Menu :collapsed="collapsed"></Menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
                class="trigger"
                :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                @click="()=> collapsed = !collapsed"
        />
        <h1 style="display: inline">{{this.$route.name}},{{this.$route.params.user}}</h1>
        <a-button
                type="primary"
                @click="logout()"
        >Primary</a-button>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>

  import Menu from '@/components/Menu'

  export default {
    name:'home',
    components: {Menu},
    data() {
      return {
        collapsed: false
      }
    },
    methods: {
      logout() {
        this.$store.commit('logout')
        this.$router.push('/login')
      }
    }
  }
</script>
<style scoped lang="scss">
  #home {
    height: 100%;
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
