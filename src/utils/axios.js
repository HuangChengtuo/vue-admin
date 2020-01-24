import axios from 'axios'
import { message } from 'ant-design-vue'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000
})

service.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    console.log(err)
    message.error(err.toString())
    return Promise.reject(err)
  }
)

export default service
