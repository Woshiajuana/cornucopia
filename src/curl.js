
import axios from 'axios'
import constant from 'src/constant'

const instance = axios.create({
    baseURL: constant.BASE_URL,
    timeout: 30 * 1000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
});

instance.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use((response) => {
    let { data, config } = response;
    if (!data) {
        return Promise.reject(`网络繁忙，请稍后再试(1)`);
    }
    return data;
}, (error) => {
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
