<template>
  <div id="login">
    <a-form
            id="components-form-demo-normal-login"
            :form="form"
            class="login-form"
            @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
                v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]"
                placeholder="Username"
        >
          <a-icon
                  slot="prefix"
                  type="user"
                  style="color: rgba(0,0,0,.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
                v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
                type="password"
                placeholder="Password"
        >
          <a-icon
                  slot="prefix"
                  type="lock"
                  style="color: rgba(0,0,0,.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox
                class="login-form-remember"
                v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
        ]"
        >
          Remember me
        </a-checkbox>
        <a
                class="login-form-forgot"
                href=""
        >
          Forgot password
        </a>
        <a-button
                type="primary"
                html-type="submit"
                class="login-form-button"
        >
          Log in
        </a-button>
        Or <a href="">
        register now!
      </a>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
  export default {
    name: "Login",
    beforeCreate() {
      this.form = this.$form.createForm(this);
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            this.$store.commit('login')
            this.$router.push({
              name:'home',params:{user:values.userName}
            })
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  #components-form-demo-normal-login {
    display: inline-block;

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
