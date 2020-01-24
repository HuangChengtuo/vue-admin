import axios from 'axios'
import { message } from 'ant-design-vue'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000
})

service.interceptors.response.use(
  res => {
    if (res.success) {
      return res
    } else {
      message.error('请求失败')
      return Promise.reject(new Error('error'))
    }
  },
  err => {
    message.error(err.toString())
    return Promise.reject(err)
  }
)

export default service
