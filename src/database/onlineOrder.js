import Mock from 'mockjs'

const order = []
for (let i = 0; i < 50; i++) {
  const temp = {
    id: Mock.Random.id(),
    name: Mock.Random.csentence(3, 8),
    price: Mock.Random.float(100, 5000, 0, 2),
    quantity: Mock.Random.integer(1, 999)
  }
  temp.sum = (temp.price * temp.quantity).toFixed(2)
  order.push(temp)
}
export default order