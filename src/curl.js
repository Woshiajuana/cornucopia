
import axios from 'axios'

const instance = axios.create({
    // baseURL: api.BASE_URL,
    timeout: 30 * 1000,
    // responseType: 'json',
    // headers: {
    //     'Content-Type': 'application/json;charset=UTF-8',
    // },
});

instance.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    // let { url, baseURL, data, params } = config;
    // console.log(`${baseURL}${url} 请求参数 =>`, data || params);
    return config;
}, (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use((response) => {
    // 对响应数据做点什么
    let { data, config } = response;
    let { url, baseURL } = config;
    // console.log(`${baseURL}${url} 请求结果 =>`, data);
    if (!data) {
        return Promise.reject(`网络繁忙，请稍后再试(1)`);
    }
    return data;
}, (error) => {
    // console.log('请求响应错误 => ', error.response);
    error = error.response
        ? `网络繁忙，请稍后再试[${error.response.status}]`
        : `网络繁忙，请稍后再试(3)`;
    return Promise.reject(error);
});

const curl = (url, data = {}, options = {}) => {
    let {
        method,
        loading,
    } = options = Object.assign({
        url,
        loading: true,
        method: 'post',
    }, options);
    delete options.loading;
    return instance(options).finally(() => {
    });
};

curl.get = (url, data = {}, options = {}) => {
    return curl(url, data, Object.assign({ method: 'get' }, options));
};

curl.post = (url, data = {}, options = {}) => {
    return curl(url, data, options);
};

export default curl;
