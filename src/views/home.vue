<template>
  <div id="home" class="normal-content">
    <div>
      <img alt="avatar" class="avatar-img" src="@/assets/aqua.jpg">
      <div class="greeting">
        <div class="greeting-text">{{ greeting }}</div>
        <div class="greeting-text">text text text</div>
      </div>
    </div>
    <a-divider />
    <a-carousel autoplay>
      <div>易用</div>
      <div>灵活</div>
      <div>高效</div>
    </a-carousel>
    <div class="comment">
      <a-comment>
        <a-avatar slot="avatar" alt="avatar" :src="require('@/assets/aqua.jpg')" />
        <div slot="content">
          <a-form-item>
            <a-textarea v-model="comment" placeholder="有什么想和大家分享的？" :rows="4" />
          </a-form-item>
          <a-form-item>
            <a-button html-type="submit" type="primary" :loading="addLoading" @click="addComment">发表动态</a-button>
          </a-form-item>
        </div>
      </a-comment>
      <a-list item-layout="horizontal" :data-source="commentList" :header="'动态'">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-comment :author="item.author" :avatar="item.avatar" :content="item.content" :datetime="item.datetime" />
        </a-list-item>
      </a-list>
    </div>
    <a-card title="员工指数">
      <div id="employeeChart" />
    </a-card>
  </div>
</template>

<script>
import cookie from 'js-cookie'
import echarts from 'echarts'
import moment from 'moment'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      nickname: cookie.get('nickname'),
      comment: '',
      addLoading: false,
      commentList: [
        {
          actions: ['Reply to'],
          author: '全撸剩饭',
          avatar: require('@/assets/wtmsb.jpg'),
          content: '今天和人去恰饭，摸了',
          datetime: moment(new Date('2019-7-17 20:10')).format('YYYY年MM月DD日 HH:mm')
        },
        {
          actions: ['Reply to'],
          author: '白上吹雪',
          avatar: require('@/assets/FBK.jpg'),
          content: '上班好累啊',
          datetime: moment(new Date('2019-7-17 16:40')).format('YYYY年MM月DD日 HH:mm')
        },
        {
          actions: ['Reply to'],
          author: 'Mr_Quin',
          avatar: require('@/assets/quin.jpg'),
          content: '草今天摸了，和美女约会了 ​​​​',
          datetime: moment(new Date('2019-7-5 18:27')).format('YYYY年MM月DD日 HH:mm')
        }
      ],
      employeeChart: null
    }
  },
  computed: {
    ...mapState(['collapsed']),
    greeting() {
      const hour = new Date().getHours()
      let text = ''
      switch (true) {
        case hour < 5:
          text = '凌晨好，'
          break
        case hour < 11:
          text = '早上好，'
          break
        case hour < 13:
          text = '中午好，'
          break
        case hour < 17:
          text = '下午好，'
          break
        case hour < 24:
          text = '晚上好，'
      }
      return text + this.nickname + '，工作辛苦了'
    }
  },
  watch: {
    collapsed() {
      // 等待菜单栏动画结束宽度稳定后再 resize
      setTimeout(() => {
        this.employeeChart.resize()
      }, 200)
    }
  },
  async mounted() {
    await this.$nextTick()
    this.employeeChart = echarts.init(document.getElementById('employeeChart'))
    this.drawChart()
    window.onresize = () => {
      this.employeeChart.resize()
    }
  },
  methods: {
    drawChart() {
      this.employeeChart.setOption({
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
            { name: '出勤率', max: 10 },
            { name: '业绩', max: 10 },
            { name: '满意度', max: 10 },
            { name: '工作进度', max: 10 },
            { name: '项目数', max: 10 }
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
    },
    addComment() {
      if (!this.comment) {
        return
      }
      this.addLoading = true
      setTimeout(() => {
        this.commentList.unshift({
          author: this.nickname,
          avatar: require('@/assets/aqua.jpg'),
          content: this.comment,
          datetime: moment().fromNow()
        })
        this.addLoading = false
        this.comment = ''
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
#home {
  .avatar-img {
    $avatar-size: 80px;

    border-radius: $avatar-size / 2;
    height: $avatar-size;
    width: $avatar-size;
    margin-right: 20px;
    vertical-align: bottom;
  }

  .greeting {
    display: inline-block;

    &-text {
      line-height: 40px;

      &:first-child {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }

  .ant-carousel {
    .slick-slide {
      color: #fff;
      text-align: center;
      height: 160px;
      line-height: 160px;
      background: #364d79;
      overflow: hidden;
    }
  }

  .comment {
    float: left;
    margin-top: 24px;
    width: 60%;
  }

  .ant-card {
    float: right;
    margin-top: 40px;
    width: 35%;

    #employeeChart {
      height: 400px;
    }
  }
}
</style>
