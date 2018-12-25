export default function ({ $axios }) {
  let axios = $axios;
  // 基本配置
  axios.defaults.timeout = 10000
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

  // 请求回调
  axios.onRequest(config => {})

  // 返回回调
  axios.onResponse(res => {
    console.log(res.data);
  })

  // 错误回调
  axios.onError(error => {})
}
