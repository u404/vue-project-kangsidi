import qs from 'qs'
import axios from 'axios'
import router from '@/router'
import config from './ajaxConfig'

const ajaxBase = axios.create({
  url: '',
  method: 'get',
  baseURL: config.baseURL, //
  params: {}, // 查询字符串
  // 请求body携带数据，只适用于PUT、POST、PATCH
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  // data: {

  // },
  responseType: 'json',
  transformRequest: [function (data, headers) { // 如果需要转换数据
    return qs.stringify(data, {
      // arrayFormat: 'brackets'
    })
  }],
  headers: { // 请求头设置
    'X-Requested-With': 'XMLHttpRequest'
  },

  paramsSerializer: function (params) { // 如果需要序列化参数
    return qs.stringify(params, {
      arrayFormat: 'brackets'
    })
  },

  // timeout: 3000, // 超时时间
  withCredentials: false, // 跨域设置

  auth: { // 基础验证

  },
  onUploadProgress: function (progressEvent) {

  },
  onDownloadProgress: function (progressEvent) {

  },
  validateStatus: function (status) { // 验证状态码委托，对于返回true或undefined，结果会resolved，否则，结果会rejected
    return status >= 200 && status < 300 // 默认的验证规则
  }

})

// 请求拦截器
ajaxBase.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
ajaxBase.interceptors.response.use(function (response) {
  console.log(response)
  if (response.data instanceof Blob || +response.data.code === 200 || +response.data.code === 304) {
    return Promise.resolve(response.data)
  } else {
    if (+response.data.code === 1001 || +response.data.code === 1003) { // token不合法
      router.push('/Login/back')
    }
    return Promise.reject(response.data)
  }
}, function (error) {
  console.log(error)
  if (error.response.status >= 400 && error.response.status < 404) {
    router.push('/Login/back')
  }
  return Promise.reject(error)
})

export default ajaxBase
