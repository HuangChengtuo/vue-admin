<template>
  <div class="salesStatements">
    <div class="header">
      <a-card :hoverable="true">
        <div class="title">销售额</div>
        <p>￥114,514</p>
        <div id="chart1" class="charts"></div>
      </a-card>

      <a-card :hoverable="true">
        <div class="title">月度订单数</div>
        <p>810</p>
        <div id="chart2" class="charts"></div>
      </a-card>

      <a-card :hoverable="true">
        <div class="title">当月指标</div>

        <div id="chart3">
          当月订单数：810
          <a-progress :percent="100"/>
          当月销售额：￥114514
          <a-progress :percent="86"/>
          出勤率：
          <a-progress :percent="65" status="active"/>
        </div>
      </a-card>
    </div>
    <div>asdasd</div>
  </div>
</template>

<script>

  import echarts from 'echarts'
  import {mapState} from 'vuex'

  export default {
    name: "Statements",
    data() {
      return {
        chart1: {},
        chart2: {}
      }
    },
    mounted() {

      setTimeout(() => {
        this.chart1 = echarts.init(document.getElementById('chart1'))
        this.chart2 = echarts.init(document.getElementById('chart2'))
        this.showChart1()
        this.showChart2()
      }, 10)

      window.onresize = () => {
        this.chart1.resize()
        this.chart2.resize()
      }

    },
    computed: {
      ...mapState(['collapsed'])
    },
    watch: {
      collapsed: function () {
        setTimeout(() => {
          this.chart1.resize()
          this.chart2.resize()
        }, 100)
      }
    },
    methods: {
      showChart1() {
        let option = {
          tooltip: {trigger: 'item'},
          grid: {x: 0, y: 0, x2: 0, y2: 20},
          xAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value',
            show: false
          },
          series: [{
            data: [81520, 68132, 48616, 153648, 36846, 78945, 114514],
            type: 'bar'
          }]
        }
        this.chart1.setOption(option)

      },
      showChart2() {
        let option = {
          grid: {x: 0, y: 0, x2: 0, y2: 20},
          tooltip: {trigger: 'item'},
          xAxis: {
            show: false,
            type: 'category',
            boundaryGap: false,
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
          },
          yAxis: {
            type: 'value',
            show: false
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1832, 1354, 513, 1234, 1551],
            type: 'line',
            areaStyle: {}
          }]
        }
        this.chart2.setOption(option)
      }
    }
  }
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    justify-content: space-around;
  }

  .title {
    font-size: 1.5rem;
    margin-bottom: 16px;
  }

  .ant-card {
    width: 30%;

    p {
      margin: 0;
    }
  }

  .charts {
    height: 150px;
    width: 100%;
  }
</style>
