import axios, { InternalAxiosRequestConfig } from 'axios'

const instance = axios.create({
  baseURL: 'http://10.50.105.174:1122',
  timeout: 120 * 1000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
})

const log = (config: InternalAxiosRequestConfig, ...args: any[]) => {
  const { url = '', baseURL = '', method } = config
  console.log(`${url?.startsWith(`http`) ? url : baseURL + url}`, `[${method}]`, ...args)
}

instance.interceptors.request.use(
  (config) => {
    const { data, params } = config

    log(config, `请求参数 =>`, data || params)

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  (response) => {
    const { data: respData, config } = response
    const { data, isSuccess } = respData

    if (!isSuccess) {
      return Promise.reject(respData)
    }

    log(config, '请求返回 => ', respData)

    return data
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default instance
