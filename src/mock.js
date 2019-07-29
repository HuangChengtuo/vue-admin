import Mock from 'mockjs'

let users = [
  {
    userName: 'a',
    password: '123456',
    nickname: 'aaa',
    department: ['销售部']
  },
  {
    userName: 'b',
    password: '123456',
    nickname: 'bbb',
    department: ['财务部']
  },
  {
    userName: 'hct',
    password: '123456',
    nickname: '黄秤砣',
    department: ['销售部', '财务部', '客服部', '物流部']
  },
  {
    userName: 'admin',
    password: '123456',
    nickname:'adminstrator',
    department: ['销售部', '财务部', '客服部', '物流部']
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
