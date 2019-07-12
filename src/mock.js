import Mock from 'mockjs'

let users = [
  {
    userName: 'a',
    password: '123456',
    access: []
  },
  {
    userName: 'hct',
    password: '123456',
    access:[]
  },
  {
    userName: 'admin',
    password: '123456',
    access:['']
  }
]
Mock.mock('login.com', (data) => {
  let uploadUser = JSON.parse(data.body)
  let loginUser
  loginUser = {
    ...users.find((user) => {
        return user.userName == uploadUser.userName && user.password == uploadUser.password
      }
    )
  }
  delete loginUser.password
  return loginUser
})
