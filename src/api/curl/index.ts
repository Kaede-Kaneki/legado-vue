import { AxiosRequestConfig } from 'axios'
import instance from './instance'

export const curl = <T = any>(
  url: string,
  data: Record<string, any> = {},
  options: AxiosRequestConfig = {},
): Promise<T> => {
  const { method } = (options = Object.assign(
    {
      method: 'get',
    },
    options,
  ))

  options.url = url

  options[method === 'get' ? 'params' : 'data'] = data

  return instance({ ...options })
}
