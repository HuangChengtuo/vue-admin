<template>
  <div class="information">
    <a-avatar :size="128"
              icon="user"
              :src="require('../../assets/DD.png')" />
    <a-button class="upload"
              type="primary">上传新头像</a-button>
    <a-form :layout="formLayout"
            @submit="handleSubmit"
            :form="form">
      <a-form-item label="昵称"
                   :label-col="formItemLayout.labelCol"
                   :wrapper-col="formItemLayout.wrapperCol">
        <a-input v-decorator="['nickname',{initialValue:this.$store.state.nickname}]"
                 placeholder="input placeholder" />
      </a-form-item>

      <a-form-item label="性别"
                   :label-col="formItemLayout.labelCol"
                   :wrapper-col="formItemLayout.wrapperCol">
        <a-select v-decorator="['gender',{initialValue:'男'}]"
                  placeholder="Select a option and change input text above">
          <a-select-option value="男">
            男
          </a-select-option>
          <a-select-option value="女">
            女
          </a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item label="手机"
                   :label-col="formItemLayout.labelCol"
                   :wrapper-col="formItemLayout.wrapperCol">
        <a-input v-decorator="['phone',{initialValue:'18958817571'}]" />
      </a-form-item>

      <a-form-item label="邮箱"
                   :label-col="formItemLayout.labelCol"
                   :wrapper-col="formItemLayout.wrapperCol">
        <a-input v-decorator="['email']"
                 placeholder="请填写你的邮箱" />
      </a-form-item>

      <a-form-item label="个人网站"
                   :label-col="formItemLayout.labelCol"
                   :wrapper-col="formItemLayout.wrapperCol">
        <a-input v-decorator="['website',{initialValue:'https://github.com/HuangChengtuo'}]" />
      </a-form-item>

      <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
        <a-button type="primary"
                  html-type="submit"
                  class="login-form-button">
          修改
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import AFormItem from "ant-design-vue/es/form/FormItem";

export default {
  name: "Information",
  components: { AFormItem },
  data () {
    return {
      formLayout: 'horizontal',
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
  computed: {
    formItemLayout () {
      const { formLayout } = this;
      return formLayout === 'horizontal' ? {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      } : {}
    },
    buttonItemLayout () {
      const { formLayout } = this;
      return formLayout === 'horizontal' ? {
        wrapperCol: { span: 14, offset: 4 },
      } : {}
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values);
          this.$store.commit('updateInformation', values)
          this.$message.success('修改成功')
        }
      });
    }
  }
}
</script>

<style scoped lang="scss">
.ant-avatar {
  margin: {
    top: 16px;
    left: 32px;
    bottom: 32px;
    right: 32px;
  }
  box-shadow: 0px 0px 10px gray;
}

.upload {
  position: relative;
  top: 20px;
}
</style>
