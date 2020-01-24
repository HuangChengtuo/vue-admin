<template>
  <div id="login">
    <a-form id="login-form" :form="form" @submit="loginFn">
      <div class="header">
        <img src="@/assets/DD.png">
        DEMO
      </div>
      <a-form-item>
        <a-input
          v-decorator="['username',{ rules: [{ required: true, message: '请输入用户名' }], validateTrigger:'blur' }]"
          placeholder="请输入用户名"
        >
          <a-icon slot="prefix" type="user" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="['password',{ rules: [{ required: true, message: '请输入密码' }], validateTrigger:'blur' }]"
          placeholder="请输入密码"
          type="password"
        >
          <a-icon slot="prefix" type="lock" />
        </a-input>
      </a-form-item>
      <a-button html-type="submit" type="primary">登录</a-button>
    </a-form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      form: null
    }
  },
  created() {
    this.form = this.$form.createForm(this)
    console.log(this.form)
  },
  methods: {
    loginFn(e) {
      e.preventDefault()
      this.form.validateFields((err, val) => {
        console.log(err, val)
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
    padding: 0 24px 48px;
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
