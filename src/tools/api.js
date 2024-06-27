import axios from 'axios'

const env = import.meta.env
axios.defaults.timeout = env.VITE_API_TIMEOUT
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// 添加请求拦截器
axios.interceptors.request.use(config => {
    // console.log(config);
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config
}, err => {
    return Promise.reject(err)
})


// 添加响应拦截器
axios.interceptors.response.use(res => {
    if (res.status == 200) {
        if (res.data && res.data.code == 200) {
            return res.data
        }
    }
    return Promise.reject()
    // console.log(res);
}, err => {
    return Promise.reject(err)
})
//获取url
const getUrl = (url) => {
    return "/api" + url
    // return env.VITE_API_API + url
}
//获取日志
const getConfig = (config = {}) => {
    config.headers = getHeaders(config.headers)
    return config
}
//获取header
const getHeaders = (headers = {}) => {
    headers['Content-Type'] = 'application/json;charset=UTF-8'
    return headers
}


//post
export function post(url, params = {}, config = {}) {
    return axios.post(getUrl(url), params, getConfig(config))
}

//get
export function get(url, params = {}, config = {}) {
    return axios.get(getUrl(url), {params}, getConfig(config))
}

