import axios from 'axios'

const env = import.meta.env
axios.defaults.timeout = env.VITE_API_TIMEOUT
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// 添加请求拦截器
axios.interceptors.request.use(config => {
    // console.log(config);
    return config
}, err => {
    return Promise.reject(err)
})


// 添加响应拦截器
axios.interceptors.response.use(res => {
    // console.log(res);
    return res;
}, err => {
    return Promise.reject(err)
})
//获取url
const getUrl = (url) => {
    return "/api" + url
}
//获取日志
const getConfig = (config={}) => {
    config.headers = getHeaders(config.headers)
    return config
}
//获取header
const getHeaders = (headers = {}) => {
    headers['Content-Type'] = 'application/json;charset=UTF-8'
    return headers
}

//post
export async function post(url, params={}, config={}) {
    return axios.post(getUrl(url), params, getConfig(config))
}

//get
export async function get(url, params={}, config={}) {
    return axios.get(getUrl(url), {params}, getConfig(config))
}

