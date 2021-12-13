import axios from 'axios'

export function request(config){
  const instance=axios.create({
    baseURL:'http://192.168.50.136//analysis/index',
    timeout:5000
  })
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  return instance(config)
}