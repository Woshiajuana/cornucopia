/**
 * Created by Administrator on 2017/5/2.
 */
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = "application/json; charset=utf-8";
import router from '../../router/index'

const PackData = (data) => {
    return JSON.stringify(data)
};

const Util = function (win) {

    /**定义一系列变量*/
    var Util = {},
        MAIN_URL = '//www.owulia.com/blog/';

    /**根据是线上环境还是本地环境，选取不同的server_url的值*/
    if (win.location.href.indexOf('localhost') > -1){
        MAIN_URL = 'http://localhost:8088/';
    }

    /**用户登录*/
    Util.login = function ( user ) {
        return Util.ajax("user/login", "POST",{ user_name: user.user_name, user_password: user.user_password });
    };

    /**分组列表*/
    Util.fetchGroupList = function ( page_num, page_size, key_words ) {
        return Util.ajax("group/list", "POST",{  page_num, page_size, key_words });
    };

    /**分组详情*/
    Util.fetchGroupDetailByGroupId = function ( _id ) {
        return Util.ajax("group/info", "POST",{ _id });
    };

    /**新增分组*/
    Util.addGroupData = function ( group_name ) {
        return Util.ajax("group/add", "POST",{ group_name });
    };

    /**编辑分组*/
    Util.editGroupData = function ( _id, group_name ) {
        return Util.ajax("group/edit", "POST",{ _id, group_name });
    };

    /**删除分组*/
    Util.deleteGroupData = function ( _id ) {
        return Util.ajax("group/delete", "POST",{ _id });
    };

    /**批量删除分组*/
    Util.deleteManyGroupsData = function ( idArr ) {
        return Util.ajax("group/deletes", "POST",{ idArr });
    };

    /**标签列表*/
    Util.fetchTagList = function ( page_num, page_size, tag_group, key_words ) {
        return Util.ajax("tag/list", "POST",{  page_num, page_size, tag_group, key_words });
    };

    /**标签详情*/
    Util.fetchTagDetailByTagId = function ( _id ) {
        return Util.ajax("tag/info", "POST",{ _id });
    };

    /**新增标签*/
    Util.addTagData = function ( tag_name, tag_group ) {
        return Util.ajax("tag/add", "POST",{ tag_name, tag_group });
    };

    /**编辑标签*/
    Util.editTagData = function ( _id, tag_name, tag_group ) {
        return Util.ajax("tag/edit", "POST",{ _id, tag_name, tag_group });
    };

    /**删除标签*/
    Util.deleteTagData = function ( _id ) {
        return Util.ajax("tag/delete", "POST",{ _id });
    };

    /**批量删除分组*/
    Util.deleteManyTagsData = function ( idArr ) {
        return Util.ajax("tag/deletes", "POST",{ idArr });
    };

    /**文章列表*/
    Util.fetchArticleList = function ( page_num, page_size, article_type, article_is_publish, key_words ) {
        return Util.ajax("article/list", "POST",{  page_num, page_size, article_type, article_is_publish, key_words });
    };

    /**文章详情*/
    Util.fetchArticleDetailByTagId = function ( _id ) {
        return Util.ajax("article/info", "POST",{ _id });
    };

    /**新增文章*/
    Util.addArticleData = function ( article_title, article_type, article_con, article_is_publish ) {
        return Util.ajax("article/add", "POST",{  article_title, article_type, article_con, article_is_publish });
    };

    /**编辑文章*/
    Util.editArticleData = function ( _id, article_title, article_type, article_con, article_is_publish ) {
        return Util.ajax("article/edit", "POST",{ _id, article_title, article_type, article_con, article_is_publish });
    };

    /**上下架文章*/
    Util.offOrReleaseArticle = function ( _id, article_is_publish ) {
        return Util.ajax("article/up_or_down", "POST",{ _id, article_is_publish });
    };

    /**删除文章*/
    Util.deleteArticleData = function ( _id ) {
        return Util.ajax("article/delete", "POST",{ _id });
    };

    /**批量删除分组*/
    Util.deleteManyArticlesData = function ( idArr ) {
        return Util.ajax("article/deletes", "POST",{ idArr });
    };

    /**批量上下架文章*/
    Util.offOrReleaseArticles = function ( idArr, article_is_publish ) {
        return Util.ajax("article/up_or_downs", "POST",{ idArr, article_is_publish });
    };

    /**公用请求ajax的方式*/
    Util.ajax = (url, method, data) => {
        var isGet = false;
        if (method.match(/get/i) != null) isGet = true;
        ( url.indexOf('http://') > -1 ) && ( MAIN_URL = '' );
        return new Promise((resolve, reject) => {
            axios({
                url: url,
                method: method,
                baseURL: MAIN_URL,
                timeout: 10 * 1000,
                data: isGet ? '' : PackData(data),
                params: isGet ? PackData(data) : '',
                responseType: 'json'
            }).then((res) => {
                if(res.data.status == -1) {
                    router.push('/login');
                    return;
                }
                return resolve(res.data)
            }).catch ((err) => {
                return reject(err)
            })
        })
    };
    return Util;
} (window);

export default Util;
