import Mock from 'mockjs'

const order = []
const platform = ['京东', '淘宝', '亚马逊', '拼多多']
for (let i = 0; i < Mock.Random.integer(2, 810); i++) {
  const temp = {
    id: Mock.Random.integer(1000000000,10000000000),
    name: Mock.Random.cword(3, 8),
    price: Mock.Random.float(100, 5000, 0, 2),
    quantity: Mock.Random.integer(1, 999),
    source: select(platform)
  }
  temp.sum = (temp.price * temp.quantity).toFixed(2)
  order.push(temp)
}

function select(arr) {
  return arr[Mock.Random.integer(0, 3)]
}

export default order