<template>
  <a-layout-header id="header">
    <a-icon class="fold-icon" :type="foldIcon" @click="collapseSidebar(!collapsed)" />
    <a-breadcrumb>
      <template v-for="route of $route.matched">
        <a-breadcrumb-item v-if="route.meta.title" :key="route.name">
          <a-icon v-if="route.meta.icon" :type="route.meta.icon" />
          <span>{{ route.meta.title }}</span>
        </a-breadcrumb-item>
      </template>
    </a-breadcrumb>
    <a-dropdown>
      <span class="avatar">
        {{ nickname }}
        <img alt="avatar" class="avatar-img" :src="require('@/assets/aqua.jpg')">
      </span>
      <a-menu slot="overlay">
        <a-menu-item>
          <a-icon type="user" />
          1st menu item
        </a-menu-item>
        <a-menu-item @click="goToGitHub">
          <a-icon type="github" />
          GitHub
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item @click="logout">
          <a-icon type="logout" />
          注销
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </a-layout-header>
</template>

<script>
import { mapState } from 'vuex'
import cookie from 'js-cookie'

export default {
  computed: {
    ...mapState(['collapsed']),
    foldIcon() {
      return this.collapsed ? 'menu-unfold' : 'menu-fold'
    },
    nickname() {
      return cookie.get('nickname')
    }
  },
  methods: {
    collapseSidebar(collapsed) {
      this.$store.commit('changeCollapsed', collapsed)
    },
    goToGitHub() {
      window.open('https://github.com/HuangChengtuo/vue-admin')
    },
    logout() {
      cookie.remove('token')
      cookie.remove('permission')
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style lang="scss">
#header {
  background: white;
  padding: 0 24px;

  .fold-icon {
    font-size: 20px;
    margin-right: 24px;
  }

  .ant-breadcrumb {
    display: inline-block;
  }

  .avatar {
    float: right;
    font-size: 16px;

    $avatar-size: 64px;

    &-img {
      border-radius: $avatar-size / 2;
      height: $avatar-size;
      width: $avatar-size;
      padding: 4px;
      vertical-align: bottom;
    }
  }
}
</style>
