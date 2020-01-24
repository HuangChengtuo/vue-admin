import Mock from 'mockjs'
import users from '@/database/user'

Mock.mock('user/login', 'post', options => {
  const data = JSON.parse(options.body)
  for (const user of users) {
    if (user.username === data.username) {
      if (data.password === '123456') {
        return { success: true, token: Mock.Random.guid() }
      } else {
        return { success: false, message: '密码错误' }
      }
    }
  }
  return { success: false, message: '用户名不存在' }
})
