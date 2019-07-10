<template>
  <a-layout id="home">
    <a-layout-sider
            :trigger="null"
            collapsible
            v-model="collapsed"
    >
      <div class="logo">
        <img src="../assets/DD.png"/>
        <span v-if="!collapsed">admin</span>
      </div>
      <Menu></Menu>
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
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>

  import Menu from '@/components/Menu'

  export default {
    name: 'home',
    components: {Menu},
    data() {
      return {
        collapsed: false
      }
    },
    methods: {
      logout() {
        this.$store.commit('logout')
        this.$router.push('login')
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
