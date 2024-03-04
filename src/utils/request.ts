import axios from 'axios'
import router from '@/router'
import { ElMessage } from 'element-plus'

// create an axios instance
const service = axios.create({
  baseURL: '/api/v1',
  timeout: 30000
  // withCredentials: true, // 跨域请求时发送Cookie
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // if (Storage.get(ENV.storage.token)) {
    //   config.headers['Authorization'] =
    //     'Basic ' + Base64.encode(Storage.get(ENV.storage.token) + ':') //读取本地token
    // }
    return config
  },
  (error) => {
    console.error(error)
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code === 0) {
      return res
    } else {
      if (res.code === 401) {
        router.push('/')
      }
      return res
    }
  },
  (error) => {
    console.error('err' + error) // for debug
    ElMessage.error(error)
    return Promise.reject(error)
  }
)

export default service
