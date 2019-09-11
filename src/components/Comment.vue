<template>
  <div>
    <a-comment>
      <a-avatar
        slot="avatar"
        :src="require('../assets/DD.png')"
        alt="Han Solo"
      />
      <div slot="content">
        <a-form-item>
          <a-textarea placeholder="有什么想和大家分享的？" :rows="4" :value="value" @change="handleChange" />
        </a-form-item>
        <a-form-item>
          <a-button
            :loading="submitting"
            html-type="submit"
            type="primary"
            @click="handleSubmit"
          >
            发表动态
          </a-button>
        </a-form-item>
      </div>
    </a-comment>
    <a-list
      v-if="comments.length"
      :data-source="comments"
      :header="'动态'"
      item-layout="horizontal"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <a-comment
          :author="item.author"
          :avatar="item.avatar"
          :content="item.content"
          :datetime="item.datetime"
        />
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
  import moment from 'moment'
  import 'moment/locale/zh-cn'

  moment.locale('zh-cn')

  export default {
    name: "Comment",
    data() {
      return {
        comments: [
          {
            actions: ['Reply to'],
            author: '全撸剩饭',
            avatar: require('../assets/wtmsb.jpg'),
            content: '今天和人去恰饭，摸了',
            datetime: moment("2019-7-17 20:10").fromNow()
          },
          {
            actions: ['Reply to'],
            author: '白上吹雪',
            avatar: require('../assets/FBK.jpg'),
            content: '上班好累啊',
            datetime: moment("2019-7-17 16:40").fromNow()
          },
          {
            actions: ['Reply to'],
            author: 'Mr_Quin',
            avatar: require('../assets/quin.jpg'),
            content: '草今天摸了，和美女约会了 ​​​​',
            datetime: moment("2019-7-5 18:27").format("YYYY年MM月DD日 HH时mm分")
          },
        ],
        submitting: false,
        value: '',
        moment,
      }
    },
    methods: {
      handleSubmit() {
        if (!this.value) {
          return
        }
        this.submitting = true
        setTimeout(() => {
          this.submitting = false
          this.comments = [
            {
              author: this.$store.state.nickname,
              avatar: require('../assets/DD.png'),
              content: this.value,
              datetime: moment().fromNow()
            },
            ...this.comments
          ]
          this.value = ''
        }, 500)
      },
      handleChange(e) {
        this.value = e.target.value
      }
    }
  }
</script>

<style scoped>

</style>
