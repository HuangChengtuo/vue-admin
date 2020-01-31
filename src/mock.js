import Mock from 'mockjs'
import users from '@/database/user'
import order from '@/database/order'

Mock.mock('user/login', 'post', options => {
  const data = JSON.parse(options.body)
  for (const user of users) {
    if (user.username === data.username) {
      if (data.password === user.password) {
        return {
          nickname: user.nickname,
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

Mock.mock('order/getList', 'get', { list: order })
