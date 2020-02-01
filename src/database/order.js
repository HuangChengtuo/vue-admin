import Mock from 'mockjs'

export default function(id, platform, state) {
  const orderList = []

  const platformList = ['京东', '拼多多', '其它', '淘宝', '线下', '亚马逊']
  const selectPlatform = arr => arr[Mock.Random.integer(0, 5)]

  const stateList = ['未发货', '已发货', '已收货']
  const selectState = arr => arr[Mock.Random.integer(0, 2)]

  for (let i = 0; i < Mock.Random.integer(2, 810); i++) {
    const temp = {
      id: id || Mock.Random.integer(1000000000, 10000000000),
      goodsName: Mock.Random.cword(3, 8),
      price: Mock.Random.float(100, 5000, 0, 2),
      quantity: Mock.Random.integer(1, 999),
      platform: platform || selectPlatform(platformList),
      state: state || selectState(stateList)
    }
    temp.sum = (temp.price * temp.quantity).toFixed(2)
    orderList.push(temp)
  }
  return id ? [orderList[0]] : orderList
}
