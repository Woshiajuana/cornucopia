import { ResponseData } from '@/types'
import qs from 'querystring'
import { RESPONSE_CODE, BASE_URL } from '@/constants'

export const curl = async <T>(
  url: string,
  params: any = {},
  options?: RequestInit,
): Promise<T> => {
  // options
  options = Object.assign({ method: 'get' }, options)

  // path 参数替换
  if (params) {
    Object.keys(params).forEach((key) => {
      const k = `{${key}}`
      if (url.includes(k)) {
        url = url.replace(k, params[key])
        delete params[key]
      }
    })
  }

  let body: BodyInit | null = null
  if (options.method!.toLocaleLowerCase() === 'get' && params) {
    url = `${url}?${qs.stringify(params)}`
  } else if (params && typeof params === 'object') {
    body = JSON.stringify(params)
  }

  const response = await fetch(`${BASE_URL}${url}`, {
    body,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...options,
  })

  // const { data, msg, code }: ResponseData<T> = await response.json()
  //
  // if (code !== RESPONSE_CODE.SUCCESS) {
  //   throw new Error(msg)
  // }

  return await response.json()
}
