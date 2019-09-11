<template>
  <div id="login">
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <img src="../assets/DD.png" />
      <h1 style="display: inline">
        DEMO
      </h1>
      <a-form-item>
        <a-input
          v-decorator="[
            'userName',
            { rules: [{ required: true, message: '请输入用户名！' }] }
          ]"
          placeholder="用户名:hct,admin,a,b"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            { rules: [{ required: true, message: '请输入密码！' }] }
          ]"
          type="password"
          placeholder="密码:123456"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item :validate-status="validateStatus" :help="message">
        <a-checkbox
          v-decorator="[
            'remember',
            {
              valuePropName: 'checked',
              initialValue: true,
            }
          ]"
          class="login-form-remember"
        >
          记住我
        </a-checkbox>
        <a class="login-form-forgot" href>忘记密码？</a>
        <a-button type="primary" html-type="submit" class="login-form-button">
          登录
        </a-button>
      </a-form-item>
      <a-form-item>
        Or
        <a href>立即注册！</a>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>

  import axios from 'axios'

  export default {
    name: "Login",
    data() {
      return {
        validateStatus: 'success',
        message: ''
      }
    },
    beforeCreate() {
      this.form = this.$form.createForm(this)
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault()
        this.form.validateFields((err, values) => {
          if (!err) {
            axios.post('/login', values).then((res) => {
              if (res.data.userName) {
                console.log(res.data)
                this.validateStatus = 'success'
                this.message = '登录成功'
                setTimeout(() => {
                  this.$store.commit('login', res.data)
                  this.$router.push({
                    name: 'home', params: {user: values.userName}
                  })
                }, 500)
              } else {
                this.validateStatus = 'error'
                this.message = '用户名或密码错误'
              }
            })
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  #login {
    background: gray;
    height: 100%;
  }

  #components-form-demo-normal-login {
    background: white;
    max-width: 400px;
    padding: 24px {
      top: 0px;
    }
    border-radius: 6px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
      width: 50%;
      padding-right: 16px;
      box-sizing: content-box;
    }

    .login-form {
      max-width: 300px;
    }

    .login-form-forgot {
      float: right;
    }

    .login-form-button {
      width: 100%;
    }
  }
</style>
