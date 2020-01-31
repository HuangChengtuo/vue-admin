import axios from '@/utils/axios'

export function getList(data) {
  return axios({
    url: 'order/getList',
    method: 'get',
    data
  })
}
