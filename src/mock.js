import Mock from 'mockjs'

let users = [
  {
    userName: 'a',
    password: 'a',
    access: []
  },
  {
    userName: 'hct',
    password: 'hct'
  },
  {
    userName: 'admin',
    password: 'admin'
  }
]
Mock.mock('login.com', (data) => {
  let uploadUser = JSON.parse(data.body)
  let loginUser = users.find((user) => {
      return user.userName == uploadUser.userName && user.password == uploadUser.password
    }
  )||false
  delete loginUser.password
  return loginUser
})
