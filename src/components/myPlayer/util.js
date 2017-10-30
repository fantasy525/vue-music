/**
 * Created by zxf on 2017/10/30.
 */
import originJsonp from 'jsonp'

export function parseUrl (url, data) {
  let params = ''
  for (let key in data) {
    params += `&${key}=${data[key]}`
  }
  params = params.substring(1)
  return `${url}?${params}`
}

export function jsonp (url, data) {
  const commonParams = { // 通用的请求参数
    g_tk: 5381,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    format: 'jsonp'
  }

  const options = {
    param: 'jsonpCallback'
  }
  const urlData = Object.assign({}, commonParams, data)
  url = parseUrl(url, urlData)
  return new Promise((resolve, reject) => {
    originJsonp(url, options, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}
