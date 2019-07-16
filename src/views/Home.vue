<template>
  <div class="home">
    <header>
      <a-avatar class="avatar" :size="64" icon="user" :src="require('../assets/FBK.jpg')"/>
      <div class="title">欢迎，{{this.nickname}}，996是你的福报</div>
      <div>{{this.department.join(' | ')}}</div>
    </header>
    <a-divider></a-divider>
  </div>
</template>

<script>

  import {mapState} from 'vuex'

  export default {
    name: 'home',
    data() {
      return {}
    },
    computed: {
      ...mapState(['nickname', 'department'])
    },
    methods: {}
  }
</script>
<style scoped lang="scss">

  .avatar {
    float: left;
    margin: {
      right: 32px;
    };
  }

  .title {
    font-size: 20px;
    color: black;
    margin-bottom: 8px;
  }
</style>
