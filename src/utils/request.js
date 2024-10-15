import axios from 'axios'
import { APP_API_URL } from '../config/index'
//import { toMainLogin } from "../libs/login";
import cookie from "./store/cookie";

const instance = axios.create({
  baseURL: APP_API_URL,
  timeout: 800000
})
const defaultOpt = { login: true }

function baseRequest(options) {

 //let token='fa3c5db850ada70422a02e4638984dc08822f010'
 let token=''

 if(cookie.get('ad_info')!==null && cookie.get('ad_info')!==undefined ) {

     token=cookie.get('ad_info').token
 }
 else if(cookie.get('user_info')!==null && cookie.get('user_info')!==undefined ) {
     if(options.url!==null && options.url!==undefined && options.url.indexOf('crm_login')>-1) {
          token=''
     }
     else {
      token=cookie.get('user_info').token


      }
 }



 // const token = cookie.get('login_status')

  //const headers = options.headers || {}
  let headers =  {
								'Content-Type': 'application/json',

			 					}
	if(token!=='') {
     headers = {
								'Content-Type': 'application/json',
								"Authorization": 'Token '+token,
			 					}
		}
  //headers['Authori-zation'] = "Bearer " + token
  options.headers = headers
  //if (options.login && !token) {
  //  toMainLogin()
  //  return Promise.reject({ msg: '未登录', toLogin: true })
  //}

  return instance(options).then(res => {

    const data = res.data || {}

    if (res.status !== 200 && res.status !== 201) {

      return Promise.reject({ msg: '请求失败', res, data })
    }
    if ([410000, 410001, 410002].indexOf(data.status) !== -1) {
     // toMainLogin()
      return Promise.reject({ msg: res.data.msg, res, data, toLogin: true });

    } else if (res.status === 200 || res.status === 201 || res.status === 301) {

      return Promise.resolve(data, res)

    }

    else {
      return Promise.reject({ msg: res.data.msg, res, data })
    }
  })
}
const request = ["post", "put", "patch"].reduce((request, method) => {
  /**
   *
   * @param url string 接口地址
   * @param data object get参数
   * @param options object axios 配置项
   * @returns {AxiosPromise}
   */
  request[method] = (url, data = {}, options = {}) => {
    return baseRequest(
      Object.assign({ url, data, method }, defaultOpt, options)
    );
  };
  return request;
}, {});

["get", "delete", "head"].forEach(method => {
  /**
   *
   * @param url string 接口地址
   * @param params object get参数
   * @param options object axios 配置项
   * @returns {AxiosPromise}
   */
  request[method] = (url, params = {}, options = {}) => {
    return baseRequest(
      Object.assign({ url, params, method }, defaultOpt, options)
    );
  };
});

export default request;
