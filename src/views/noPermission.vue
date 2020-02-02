<template>
  <div>
    <a-alert description="you have no permission" message="Error!" show-icon type="error" />
    <a-button type="danger" @click="$router.push({name:'homePage'})">back to home</a-button>
    <a-button type="danger" @click="logout">logout</a-button>
  </div>
</template>

<script>
import cookie from 'js-cookie'

export default {
  methods: {
    logout() {
      cookie.remove('token')
      cookie.remove('permission')
      this.$router.push('login')
    }
  }
}
</script>
