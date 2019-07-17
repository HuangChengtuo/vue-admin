<template>
  <div class="home">
    <header>
      <a-avatar class="avatar" :size="64" icon="user" :src="require('../assets/DD.png')"/>
      <div class="title">欢迎，{{this.nickname}}，工作辛苦了</div>
      <div>{{this.department.join(' | ')}} -- XX项目组</div>
    </header>
    <a-divider/>
    <a-carousel autoplay>
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
    </a-carousel>
    <Comment class="comment"></Comment>
  </div>
</template>

<script>

  import {mapState} from 'vuex'
  import Comment from "@/components/Comment";

  export default {
    name: 'home',
    components: {Comment},
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

  .ant-carousel {
    width: 40%;
    float: right;

    ::v-deep .slick-slide {
      text-align: center;
      height: 160px;
      line-height: 160px;
      background: #364d79;
      overflow: hidden;
    }

    ::v-deep .slick-slide h3 {
      color: #fff;
    }
  }

  .comment {
    width: 55%;
  }
</style>
