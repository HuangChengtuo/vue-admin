<template>
  <div id="info" class="normal-content">
    <a-form :form="form" :label-col="{ span: 6 }" :wrapper-col="{ span: 10 }" @submit="saveFn">
      <a-form-item label="头像">
        <a-upload
          :action="action"
          class="avatar"
          name="avatar"
          list-type="picture-card"
          :before-upload="beforeUpload"
          :file-list="fileList"
          @change="handleChange"
        >
          <img :src="imageUrl" alt="avatar">
        </a-upload>
      </a-form-item>
      <a-form-item label="昵称">
        <a-input v-decorator="nickname" />
      </a-form-item>
      <a-form-item label="性别">
        <a-select v-decorator="['sex']" allow-clear>
          <a-select-option value="男">男</a-select-option>
          <a-select-option value="女">女</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="手机">
        <a-input v-decorator="['phone']" />
      </a-form-item>
      <a-form-item label="邮箱">
        <a-input v-decorator="['e-mail']" />
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 6 }">
        <a-button type="primary" html-type="submit">
          保存
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { getInfo } from './api'
import cookie from 'js-cookie'

export default {
  data() {
    return {
      form: this.$form.createForm(this),
      action: process.env.VUE_APP_BASE_API + 'uploadImg',
      imageUrl: require('@/assets/aqua.jpg'),
      fileList: [],
      nickname: ['nickname', { rules: [{ required: true, message: '请输入昵称' }], validateTrigger: 'blur' }]
    }
  },
  created() {
    getInfo().then(res => {
      this.form.setFieldsValue(res)
      this.form.setFieldsValue({ nickname: cookie.get('nickname') })
    })
  },
  methods: {
    beforeUpload(file) {
      const isImg = file.type === 'image/jpeg' || file.type === 'image/png'
      if (!isImg) {
        this.$message.error('请选择图片')
        return false
      }
    },
    handleChange(info) {
      if (info.file.status) {
        this.imageUrl = URL.createObjectURL(info.file.originFileObj)
      }
    },
    saveFn(e) {
      e.preventDefault()
      this.form.validateFields(err => {
        if (!err) {
          this.$message.success('修改成功')
        }
      })
    }
  }
}
</script>

<style lang="scss">
#info {
  .avatar {
    .ant-upload {
      height: 128px;
      width: 128px;

      img {
        max-height: 256px;
      }

      i {
        font-size: 32px;
        color: #999;
      }

      .ant-upload-text {
        margin-top: 8px;
        color: #666;
      }
    }
  }
}
</style>
