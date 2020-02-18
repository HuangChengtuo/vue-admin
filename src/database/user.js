export default [
  {
    username: 'admin',
    password: '123456',
    nickname: 'Administrator',
    permission: [
      'sales', 'salesCharts',
      'order', 'orderAdd', 'orderEdit',
      'user', 'permission', 'userInfo'
    ]
  },
  {
    username: 'hct',
    password: '123456',
    nickname: '黄秤砣',
    permission: [
      'sales', 'salesCharts',
      'order', 'orderAdd', 'orderEdit',
      'user', 'permission', 'userInfo'
    ]
  },
  {
    username: 'guest',
    password: '123456',
    nickname: '游客',
    permission: []
  },
  {
    username: 'test',
    password: '123456',
    nickname: '测试',
    permission: ['user', 'permission']
  }
]
