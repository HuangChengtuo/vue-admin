<template>
  <a-dropdown class="avatar" placement="bottomRight">
    <a-menu slot="overlay">
      <a-menu-item key="1">
        <router-link to="/user/information">
          <a-icon type="idcard"/>
          个人资料
        </router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <a href="https://github.com/HuangChengtuo">
          <a-icon type="github"/>
          GitHub
        </a>
      </a-menu-item>
      <a-menu-divider/>
      <a-menu-item @click="logout" key="3">
        <a-icon type="logout"/>
        注销
      </a-menu-item>
    </a-menu>
    <a-avatar size="large" icon="user" :src="require('../assets/DD.png')"/>
  </a-dropdown>
</template>

<script>
  export default {
    name: "Avatar",
    methods: {
      logout() {
        this.$store.commit('logout')
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .avatar {
    float: right;

    margin: {
      top: 12px;
      left: 24px;
      right: 24px;
    };
  }
</style>
