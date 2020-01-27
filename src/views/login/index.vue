<template>
  <div id="login">
    <a-form id="login-form" :form="form" @submit="loginFn">
      <div class="header">
        <img :src="logoImg" alt="logo">
        DEMO
      </div>
      <a-form-item>
        <a-input v-decorator="username" placeholder="用户名：admin，hct">
          <a-icon slot="prefix" type="user" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="password" placeholder="密码：123456" :type="showPassword ? 'text' : 'password'">
          <a-icon slot="prefix" type="lock" />
          <a-icon
            slot="suffix"
            :type="showPassword ? 'eye-invisible' : 'eye'"
            @click="showPassword = !showPassword"
          />
        </a-input>
      </a-form-item>
      <a-form-item :validate-status="loginStatus" :help="loginMessage">
        <a-button html-type="submit" type="primary">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import axios from '@/utils/axios'
import cookie from 'js-cookie'

const login = (data) => {
  return axios({
    url: 'user/login',
    method: 'post',
    data
  })
}

export default {
  data() {
    return {
      logoImg: require('@/assets/DD.png'),
      showPassword: false,
      form: null,
      username: ['username', { rules: [{ required: true, message: '请输入用户名' }], validateTrigger: 'blur' }],
      password: ['password', { rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur' }],
      loginStatus: '',
      loginMessage: ''
    }
  },
  created() {
    this.form = this.$form.createForm(this)
  },
  methods: {
    loginFn(e) {
      e.preventDefault()
      this.form.validateFields((err, val) => {
        if (!err) {
          login(val).then(res => {
            console.log(res)
            if (res.success) {
              cookie.set('nickname', res.nickname)
              cookie.set('token', res.token)
              this.loginStatus = 'success'
              this.loginMessage = '登录成功'
              this.$router.push({ name: 'homePage' })
            } else {
              this.loginStatus = 'error'
              this.loginMessage = res.message
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
#login {
  background: gray;
  height: 100%;

  &-form {
    background: white;
    border-radius: 6px;
    display: inline-block;
    padding: 0 24px 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 456px;

    .header {
      font-size: 48px;

      img {
        width: 50%
      }
    }

    .ant-btn {
      width: 100%;
    }
  }
}
</style>
