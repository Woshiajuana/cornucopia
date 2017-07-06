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
        base_url = '//gw.dev.finumi.com/umi-manage-api/';

    /**
     * 根据是线上环境还是本地环境，选取不同的server_url的值
     * */
    if (win.location.href.indexOf('localhost') > -1){
        base_url = 'http://192.170.4.22/';
        // base_url = 'http://192.170.3.81/';
    }

    /**
     * 系统管理机构管理获取机构类型列表
     * */
    Util.fetchSystemInstitutionList = function (data, success_callback, fail_callback) {
        Util.ajax('v1/party/type/list',data,'POST',success_callback, fail_callback)
    };

    /**
     * 系统管理机构管理删除机构类型列表
     * */
    Util.deleteSystemInstitutionList = function (data, success_callback, fail_callback) {
        Util.ajax('v1/party/type/del',data,'POST',success_callback, fail_callback)
    };

    /**
     * 系统管理机构管理修改机构类型列表
     * */
    Util.updateSystemInstitutionList = function (data, success_callback, fail_callback) {
        Util.ajax('v1/party/type/edit',data,'POST',success_callback, fail_callback)
    };

    /**
     * 系统管理机构管理增加机构类型列表
     * */
    Util.addSystemInstitutionList = function (data, success_callback, fail_callback) {
        Util.ajax('v1/party/type/add',data,'POST',success_callback, fail_callback)
    };

    /**
     * 系统管理机构管理查询机构类型列表
     * */
    Util.querySystemInstitutionList = function (data, success_callback, fail_callback) {
        Util.ajax('v1/party/type/info',data,'POST',success_callback, fail_callback)
    };

    /**
     * 产品管理产品类型列表
     * */
    Util.fetchProductTypeList = function (data, success_callback, fail_callback) {
        Util.ajax('http://192.170.3.81/v1/manageapi/productCategory/to_product',data,'POST',success_callback, fail_callback)
    };

    /**
     * 公用请求ajax的方式
     * */
    Util.ajax = function (path, data, http_method, success_callback, fail_callback) {
        ( path.indexOf('http') > -1 ) && ( base_url = '' );
        axios({
            url: path,
            method: http_method,
            baseURL: base_url,
            data: Tool.changeData(data),
            timeout: 10000
        }).then( function (response) {
            var data = response.data;
            /**没有登录跳转登录页面*/
            if (data.respHeader.respCode === 'umi-00001') {
                Tool.dataToSessionStorageOperate.remove('user');
                Tool.dataToSessionStorageOperate.remove('token');
                router.push('/login');
            } else if (data.status === 2) {
                router.push('/error');
            } else {
                success_callback && success_callback(data);
            }
        }).catch( function (error) {
            fail_callback && fail_callback( error );
        });
    };

    return Util;
} (window);
export default Util;
