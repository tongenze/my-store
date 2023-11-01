import axios from "axios"
const request = axios.create({
  baseURL: "/api/",
  timeout: 300000,
})
//请求拦截
request.interceptors.request.use(
  (config) => {
    //部分接口需要拿到token
    let token = sessionStorage.getItem("user")
    if (token) {
      config.headers.token = token
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)
//拦截器 响应拦截
request.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    if (err.response.status === 401) {
      //未登录
    } else if (err.response.status === 500) {
      //连接服务器失败
    } else {
    }
    return err
  },
)
export default request
