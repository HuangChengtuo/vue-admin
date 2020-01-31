import axios from '@/utils/axios'

export function getList() {
  return axios({
    url: 'order/getList',
    method: 'get'
  })
}
