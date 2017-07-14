/**
 * Created by Administrator on 2017/5/2.
 */
import axios from 'axios'
import Tool from './Tool'
import router from '../../router/index'
axios.defaults.headers.post['Content-Type'] = "application/json; charset=utf-8";

const Util = function (win) {

    /**
     * 定义一系列变量
     * */
    var Util = {},
        MAIN_URL = '//www.owulia.com/blog/';

    /**
     * 根据是线上环境还是本地环境，选取不同的server_url的值
     * */
    if (win.location.href.indexOf('localhost') > -1){
        MAIN_URL = 'http://localhost:8088/';
    }

    /**用户登录*/
    Util.login = function ( user ) {
        return Util.ajax("user/login", "POST",{ user: user });
    };

    /**
     * 公用请求ajax的方式
     * */
    Util.ajax = (url, method, data) => {
        var isGet = false;
        if (method.match(/get/i) != null) isGet = true;
        ( url.indexOf('http://') > -1 ) && ( MAIN_URL = '' );
        return new Promise((resolve, reject) => {
            axios({
                url: url,
                method: method,
                baseURL: MAIN_URL,
                // headers:{
                //     Authorization: localSession.achieve('token') != null ?
                //         localSession.achieve('token') : ''
                // },
                data: isGet ? '' : data,
                params: isGet ? data : '',
                responseType: 'json'
            }).then((res) => {
                return resolve(res.data)
            }).catch ((err) => {
                return reject(err)
            })
        })
    };

    return Util;
} (window);
export default Util;
