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
      <a href="#" slot="extra">more</a>
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
      return {}
    },
    computed: {
      ...mapState(['nickname', 'department'])
    },
    mounted() {
      this.radar()
    },
    methods: {
      radar() {
        let radarChart = echarts.init(document.getElementById('employeeIndex'))
        radarChart.setOption({
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        })
        window.onresize = () => {
          radarChart.resize()
        }
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
    width: 55%;
  }

  .ant-card {
    float: right;
    width: 40%;

    #employeeIndex {
      height: 400px;
      max-width: 600px;
      width: 100%;
    }
  }
</style>
