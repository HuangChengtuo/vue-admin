<template>
  <div id="order-add" class="normal-content">
    <h2>新增订单</h2>
    <a-form :form="form" :label-col="{ span: 9 }" :wrapper-col="{ span: 15 }" @submit="addFn">
      <a-row>
        <a-col :span="8">
          <a-form-item label="商品名商品名">
            <a-input v-decorator="goodsName" />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="单价">
            <a-input v-decorator="price" />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="数量">
            <a-input v-decorator="quantity" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="8">
          <a-form-item label="订单来源">
            <a-select v-decorator="platform" allow-clear>
              <a-select-option value="京东">京东</a-select-option>
              <a-select-option value="拼多多">拼多多</a-select-option>
              <a-select-option value="淘宝">淘宝</a-select-option>
              <a-select-option value="线下">线下</a-select-option>
              <a-select-option value="亚马逊">亚马逊</a-select-option>
              <a-select-option value="其它">其它</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <div class="bottom-btn-row">
        <a-button @click="$router.go(-1)">取消</a-button>
        <a-button html-type="submit" type="primary">确认</a-button>
      </div>
    </a-form>
  </div>
</template>

<script>
import { getList } from './api'

const isNumber = (rule, value, callback) => {
  if (isNaN(value) || !value.toString().length) {
    callback(new Error('请输入数字'))
  }
  callback()
}
const isInt = (rule, value, callback) => {
  if (Number.isInteger(Number(value)) && value.toString().length) {
    callback()
  }
  callback(new Error('请输入整数'))
}

export default {
  data() {
    return {
      isEdit: false,
      form: this.$form.createForm(this),
      goodsName: ['goodsName', { rules: [{ required: true, message: '请输入商品名' }], validateTrigger: 'blur' }],
      price: ['price', { rules: [{ required: true, validator: isNumber }], validateTrigger: 'blur' }],
      quantity: ['quantity', { rules: [{ required: true, validator: isInt }], validateTrigger: 'blur' }],
      platform: ['platform', { rules: [{ required: true, message: '请选择订单来源' }], validateTrigger: 'blur' }]
    }
  },
  mounted() {
    if (this.$route.name === 'orderEdit') {
      this.isEdit = true
      getList({ id: this.$route.query.id }).then(res => {
        this.form.setFieldsValue(res.list[0])
      })
    }
  },
  methods: {
    addFn(e) {
      e.preventDefault()
      this.form.validateFields((err, val) => {
        if (!err) {
          this.$message.success(this.isEdit ? '修改成功' : '添加成功')
          this.$router.go(-1)
        }
      })
    }
  }
}
</script>
