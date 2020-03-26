import axios from '@/utils/axios'

export function getInfo() {
  return axios({
    url: 'user/getInfo',
    method: 'get'
  })
}
