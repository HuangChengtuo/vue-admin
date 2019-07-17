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
          <a-textarea :rows="4" @change="handleChange" :value="value"></a-textarea>
        </a-form-item>
        <a-form-item>
          <a-button
                  htmlType="submit"
                  :loading="submitting"
                  @click="handleSubmit"
                  type="primary"
          >
            发表动态
          </a-button>
        </a-form-item>
      </div>
    </a-comment>
    <a-list
            v-if="comments.length"
            :dataSource="comments"
            :header="'动态'"
            itemLayout="horizontal"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <a-comment
                :author="item.author"
                :avatar="item.avatar"
                :content="item.content"
                :datetime="item.datetime"
        >
        </a-comment>
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
            author: '白上吹雪',
            avatar: require('../assets/FBK.jpg'),
            content:'上班好累啊',
            datetime: moment("2019-7-17 16:40").fromNow()
          }
        ],
        submitting: false,
        value: '',
        moment,
      }
    },
    methods: {
      handleSubmit() {
        if (!this.value) {
          return;
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
