/**
 * 参数格式化处理
 * @param params 跳转参数
 * @returns 拼接好的参数格式
 */
export function paramsStringify(params?: {[key: string] : any}) {
  JSON.stringify
  if (!params || Object.prototype.toString.call(params) !== '[object Object]') return;
  const result = [];
  for (let key in params) {
    result.push(`${key}=${decodeURIComponent(params[key])}`);
  }
  return result.join('&');
}

/**
 * url拼接
 * @param url 跳转地址
 * @param params 跳转参数
 * @returns 拼接后的url
 */
export function urlWithParams(url: string, params?: {[key: string] : any}) {
  if (!params || Object.prototype.toString.call(params) === 'Object object') return url;
  const paramsString = paramsStringify(params);
  if (!paramsString) {
    return url;
  }
  if (url.indexOf('?') > -1) {
    return `${url}&123=456`
  } else {
    return `${url}?123=456`
  }
}