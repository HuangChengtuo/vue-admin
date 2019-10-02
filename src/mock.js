import Mock from 'mockjs'
import users from '@/database/users'
import onlineOrder from './database/onlineOrder'

// 登录
Mock.mock('/login', (data) => {
  const uploadUser = JSON.parse(data.body)
  const loginUser = {
    ...users.find((user) => {
        return user.userName === uploadUser.userName && user.password === uploadUser.password
      }
    )
  }
  delete loginUser.password
  return loginUser
})
Mock.mock('/onlineOrder/list', 'get', onlineOrder)
