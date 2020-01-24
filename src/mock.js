import Mock from 'mockjs'

Mock.mock('user/login', 'post', data => {
  console.log(data)
})
