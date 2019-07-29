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
    <a-card title="订单概览">
      <div class="main">
        <div id="chart4" class="charts"></div>
        <div id="chart5" class="charts"></div>
        <div id="chart6" class="charts"></div>
      </div>
    </a-card>
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
        chart2: {},
        chart4: {},
        chart5: {},
        chart6:{}
      }
    },
    mounted() {
      setTimeout(() => {
        this.chart1 = echarts.init(document.getElementById('chart1'))
        this.chart2 = echarts.init(document.getElementById('chart2'))
        this.chart4 = echarts.init(document.getElementById('chart4'))
        this.chart5 = echarts.init(document.getElementById('chart5'))
        this.chart6 = echarts.init(document.getElementById('chart6'))
        this.showChart1()
        this.showChart2()
        this.showChart4()
        this.showChart5()
        this.showChart6()
      }, 10)
      window.onresize = () => {
        this.chart1.resize()
        this.chart2.resize()
        this.chart4.resize()
        this.chart5.resize()
        this.chart6.resize()
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
          this.chart4.resize()
          this.chart5.resize()
          this.chart6.resize()
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
      },
      showChart4() {
        let option = {
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '80%',
              center: ['50%', '45%'],
              data: [
                {value: 645, name: '线上订单'},
                {value: 165, name: '线下订单'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        this.chart4.setOption(option)
      },
      showChart5() {
        let option = {
          title: {
            text: '线上订单分布',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {value: 335, name: '淘宝'},
                {value: 210, name: '京东'},
                {value: 65, name: '拼多多'},
                {value: 35, name: '亚马逊'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 20,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        this.chart5.setOption(option)
      },
      showChart6() {
        let option = {
          title: {
            text: '线下订单分布',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {value: 53, name: '电销'},
                {value: 11, name: '上门'},
                {value: 101, name: '到店'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 20,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        this.chart6.setOption(option)
      }
    }
  }
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    justify-content: space-around;
    margin-bottom: 24px;

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
  }

  .main {
    display: flex;
    justify-content: center;

    .div {

    }

    .charts {
      height: 300px;
      width: 100%;
    }
  }

  .title {
    font-size: 1.5rem;
    margin-bottom: 16px;
  }


</style>
