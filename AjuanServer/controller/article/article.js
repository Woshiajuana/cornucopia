/**
 * Created by Administrator on 2017/7/14.
 */
'use strict';
/**引入数据库模型*/
import article_module from '../../models/article'
/**引入分页查询工具库*/
import dbHelper from '../../lib/page-query';

class Article {
    constructor (){}
    /**新增文章*/
    async add(req, res, next){
        /**这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')*/
        if(!req.body.article_title || !req.body.article_type || !req.body.article_con ||  typeof req.body.article_is_publish == 'undefined') {
            res.json({status: 0, msg: '缺少必要参数'});
            return;
        }
        let article = {
            article_title: req.body.article_title,
            article_type: req.body.article_type,
            article_con: req.body.article_con,
            article_is_publish: req.body.article_is_publish,
            article_time: new Date()
        };
        article_module.create(article, function(err, doc){
            if(err){
                res.json({
                    status: 0,
                    msg: '操作失败'
                });
            }else{
                res.json({
                    status: 1,
                    msg: '操作成功'
                });
            }
        });
    }
    /**编辑文章*/
    async edit(req, res, next){
        /**这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')*/
        var _id = req.body._id;
        if(!_id || !req.body.article_title || !req.body.article_type || !req.body.article_con || typeof req.body.article_is_publish == 'undefined' ) {
            res.json({status: 0, msg: '缺少必要参数'});
            return;
        }
        let article = {
            article_title: req.body.article_title,
            article_type: req.body.article_type,
            article_con: req.body.article_con,
            article_is_publish: req.body.article_is_publish,
            article_time: new Date()
        };
        article_module.update({_id},article,(err,doc) => {
            if (err) {
                res.json({
                    status: 0,
                    msg: '修改失败'
                });
            } else {
                res.json({
                    status: 1,
                    msg: '修改成功'
                });
            }
        })
    }
    /**上下架文章*/
    async up_or_down(req, res, next){
        /**这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')*/
        var _id = req.body._id,
            article_is_publish = req.body.article_is_publish;
        if(!_id || typeof article_is_publish == 'undefined') {
            res.json({status: 0, msg: '缺少必要参数'});
            return;
        }
        article_module.update( { _id },{ $set: { article_is_publish } },(err,doc) => {
            if (err) {
                res.json({
                    status: 0,
                    msg: '上架失败'
                });
            } else {
                res.json({
                    status: 1,
                    msg: '上架成功'
                });
            }
        })
    }
    /**批量上下架文章*/
    async up_or_downs(req, res, next){
        var idArr = req.body.idArr;
        var article_is_publish = req.body.article_is_publish;
        if(!idArr || !idArr.length || typeof article_is_publish == 'undefined') {
            res.json({status: 0, msg: '缺少必要参数'});
            return;
        }
        var timer = 0,
            type = true;
        function update (arr) {
            if (arr.length == timer) {
                if (type) {
                    res.json({
                        status: 1,
                        msg: '操作成功'
                    });
                } else {
                    res.json({
                        status: 0,
                        msg: '操作失败'
                    });
                }
                return;
            }
            article_module.update({_id: arr[timer]},{ $set: { article_is_publish } },(err,doc) => {
                if (err) {
                    type = false;
                } else {
                    timer++;
                    update(arr)
                }
            });
        };
        update(idArr);
    }
    /**查询文章*/
    async info(req, res, next){
        var _id = req.body._id;
        if(!_id) {
            res.json({status: 0, msg: '缺少必要参数'});
            return;
        }
        article_module.find({_id},(err,doc) => {
            if(doc.length){
                res.json({
                    status: 1,
                    msg: '查询成功',
                    data: doc[0]
                });
            }else{
                res.json({
                    status: 0,
                    msg: '查询失败'
                });
            }
        })
    }
    /**文章列表*/
    async list(req, res, next){
        let article_type = req.body.article_type == 'all' ? '' : req.body.article_type;
        let article_is_publish = req.body.article_is_publish;
        let page = +req.body.page_num || 1;
        let rows = +req.body.page_size || 99999;
        let key_words = req.body.key_words;
        let query = {};
        if(article_type) query.article_type = article_type;
        if(key_words) query.article_title =  eval("/"+key_words+"/ig");
        if(article_is_publish) query.article_is_publish = article_is_publish;
        dbHelper.pageQuery(page, rows, article_module, '', query, {'article_time': -1}, (error, $page) => {
            if(error){
                res.json({status: 0, msg: '获取数据失败'});
            }else{
                res.json({
                    status:1,
                    data: {
                        arr: $page.results,
                        total: $page.total,
                        count: Math.ceil($page.pageCount)
                    }
                });
            }
        });
    }
    /**删除文章*/
    async del(req, res, next){
        var _id = req.body._id;
        if(!_id) {
            res.json({status: 0, msg: '缺少必要参数'});
            return;
        }
        article_module.remove({_id},(err,doc) => {
            if (err) {
                res.json({
                    status: 0,
                    msg: '删除失败'
                });
            } else {
                res.json({
                    status: 1,
                    msg: '删除成功'
                });
            }
        })
    }
    /**删除多个文章*/
    async dels(req, res, next){
        var idArr = req.body.idArr;
        if(!idArr || !idArr.length) {
            res.json({status: 0, msg: '缺少必要参数'});
            return;
        }
        article_module.remove({_id: { $in: idArr }},(err,doc) => {
            if (err) {
                res.json({
                    status: 0,
                    msg: '删除失败'
                });
            } else {
                res.json({
                    status: 1,
                    msg: '删除成功'
                });
            }
        })
    }
}

export default new Article()