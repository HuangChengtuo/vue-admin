import Mock from 'mockjs'
import users from '@/database/user'
import { generateOrder, generateLogistics } from '@/database/order'

Mock.mock('user/login', 'post', options => {
  const data = JSON.parse(options.body)
  for (const user of users) {
    if (user.username === data.username) {
      if (data.password === user.password) {
        return {
          nickname: user.nickname,
          permission: user.permission,
          success: true,
          token: Mock.Random.guid()
        }
      } else {
        return { success: false, message: '密码错误' }
      }
    }
  }
  return { success: false, message: '用户名不存在' }
})

Mock.mock('order/getList', 'get', options => {
  const data = JSON.parse(options.body) || {}
  return { list: generateOrder(data.id, data.platform, data.state) }
})

Mock.mock('order/logistics', 'get', generateLogistics())
Mock.mock('uploadImg', 'post', options => {
  return { success: true, status: 'done' }
})
Mock.mock('user/getInfo', 'get', () => {
  return Mock.mock({
    'sex|1': ['男', '女'],
    'phone': /^[1]([3-9])[0-9]{9}$/,
    'e-mail': Mock.Random.email()
  })
})
