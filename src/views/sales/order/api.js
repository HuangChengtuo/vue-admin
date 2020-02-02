import axios from '@/utils/axios'

export function getList(data) {
  return axios({
    url: 'order/getList',
    method: 'get',
    data
  })
}

export function getLogistics() {
  return axios({
    url: 'order/logistics',
    method: 'get'
  })
}
