<template>
  <div id="order-add" class="normal-content">
    <h2>{{ isEdit ? '修改' : '新增' }}订单</h2>
    <a-form :form="form" :label-col="{ span: 9 }" :wrapper-col="{ span: 15 }" @submit="addFn">
      <a-divider orientation="left">订单信息</a-divider>
      <a-row>
        <a-col :span="8">
          <a-form-item label="商品名">
            <a-input v-decorator="goodsName" :disabled="isEdit" />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="单价">
            <a-input v-decorator="price" :disabled="isEdit" />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="数量">
            <a-input v-decorator="quantity" :disabled="isEdit" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="8">
          <a-form-item label="订单来源">
            <a-select v-decorator="platform" allow-clear :disabled="isEdit">
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
      <a-divider orientation="left">物流信息</a-divider>
      <a-row>
        <a-col :span="8">
          <a-form-item label="运单号">
            <a-input v-decorator="logisticsId" />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="物流公司">
            <a-select v-decorator="logisticsCompany" allow-clear>
              <a-select-option value="京东">京东</a-select-option>
              <a-select-option value="顺丰">顺丰</a-select-option>
              <a-select-option value="中通">中通</a-select-option>
              <a-select-option value="圆通">圆通</a-select-option>
              <a-select-option value="申通">申通</a-select-option>
              <a-select-option value="韵达">韵达</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="物流状态">
            <a-select v-decorator="state" allow-clear>
              <a-select-option value="未发货">未发货</a-select-option>
              <a-select-option value="已发货">已发货</a-select-option>
              <a-select-option value="已收货">已收货</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="8">
          <a-form-item label="收货地址">
            <a-input v-decorator="address" type="textarea" :rows="3" />
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
import { getList, getLogistics } from './api'

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
      platform: ['platform', { rules: [{ required: true, message: '请选择订单来源' }], validateTrigger: 'blur' }],
      logisticsId: ['logisticsId'],
      logisticsCompany: ['logisticsCompany'],
      address: ['address'],
      state: ['state', { rules: [{ required: true, message: '请选择状态' }], validateTrigger: 'blur' }]
    }
  },
  created() {
    if (this.$route.name === 'orderEdit') {
      this.isEdit = true
      getList({ id: this.$route.query.id }).then(res => {
        this.form.setFieldsValue(res.list[0])
      })
      getLogistics().then(res => {
        this.form.setFieldsValue(res)
      })
    }
  },
  methods: {
    addFn(e) {
      e.preventDefault()
      this.form.validateFields(err => {
        if (!err) {
          this.$message.success(this.isEdit ? '修改成功' : '添加成功')
          this.$router.go(-1)
        }
      })
    }
  }
}
</script>
