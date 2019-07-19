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
    <a-divider/>
    <Comment class="comment"></Comment>
    <a-card title="员工指数">
      <div id="employeeIndex"></div>
    </a-card>
  </div>
</template>

<script>

  import {mapState} from 'vuex'
  import Comment from "@/components/Comment"
  import echarts from 'echarts'

  export default {
    name: 'home',
    components: {Comment},
    data() {
      return {
        radarChart: {}
      }
    },
    computed: {
      ...mapState(['nickname', 'department', 'collapsed'])
    },
    mounted() {
      setTimeout(() => {
        this.radarChart = echarts.init(document.getElementById('employeeIndex'))
        this.radar()
      }, 10)
      window.onresize = () => {
        this.radarChart.resize()
      }
    },
    watch: {
      collapsed: function () {
        setTimeout(() => {
          this.radarChart.resize()
        }, 100)
      }
    },
    methods: {
      radar() {
        this.radarChart.setOption({
          legend: {
            data: ['个人', '平均']
          },
          tooltip: {
            trigger: 'item'
          },
          radar: {
            name: {
              textStyle: {
                color: 'white',
                backgroundColor: '#999',
                borderRadius: 4,
                padding: [3, 5]
              }
            },
            indicator: [
              {name: '出勤率', max: 10},
              {name: '业绩', max: 10},
              {name: '满意度', max: 10},
              {name: '工作进度', max: 10},
              {name: '项目数', max: 10},
            ]
          },
          series: [{
            name: '员工指数',
            type: 'radar',
            data: [
              {
                value: [10, 8, 9, 7, 8],
                name: '个人'
              },
              {
                value: [8, 7, 6, 8, 5],
                name: '平均'
              }
            ]
          }]
        })
      }
    }
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
    float: left;
    width: 60%;
  }

  .ant-card {
    float: right;
    width: 35%;

    #employeeIndex {
      height: 400px;
      width: 100%;
    }
  }
</style>
