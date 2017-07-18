/**
 * Created by Administrator on 2017/7/14.
 */
'use strict';
/**引入数据库模型*/
import group_module from '../../models/group'
/**引入分页查询工具库*/
import dbHelper from '../../lib/page-query';

class Group {
    constructor (){}
    /**新增分组*/
    async add(req, res, next){
        /**这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')*/
        if(!req.body.group_name) {
            res.json({status: 0, msg: '请输入分组名称'});
            return;
        }
        let group = {
            group_name: req.body.group_name,
            group_date: new Date()
        };
        group_module.create(group, function(err, doc){
            if(err){
                res.json({
                    status: 0,
                    msg: '创建失败，是否已有该分组'
                });
            }else{
                res.json({
                    status: 1,
                    msg: '创建成功'
                });
            }
        });
    }
    /**编辑分组*/
    async edit(req, res, next){
        /**这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')*/
        var _id = req.body._id;
        if(!_id) {
            res.json({status: 0, msg: '缺少参数'});
            return;
        }
        if(!req.body.group_name) {
            res.json({status: 0, msg: '请输入分组名称'});
            return;
        }
        let group = {
            group_name: req.body.group_name,
            group_date: new Date()
        };
        group_module.update({_id},group,(err,doc) => {
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
    /**查询分组*/
    async info(req, res, next){
        /**这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')*/
        var _id = req.body._id;
        if(!_id) {
            res.json({status: 0, msg: '缺少参数'});
            return;
        }
        group_module.find({_id},(err,doc) => {
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
    /**分组列表*/
    async list(req, res, next){
        let page = +req.body.page_num || 1;
        let rows = +req.body.page_size || 12;
        let key_words = req.body.key_words;
        let query = {};
        if(key_words) query.group_name =  eval("/"+key_words+"/ig");
        dbHelper.pageQuery(page, rows, group_module, '', query, {'group_date': -1}, (error, $page) => {
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
    /**删除分组*/
    async del(req, res, next){
        var _id = req.body._id;
        if(!_id) {
            res.json({status: 0, msg: '缺少参数'});
            return;
        }
        group_module.remove({_id},(err,doc) => {
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
    /**删除多个分组*/
    async dels(req, res, next){
        var idArr = req.body.idArr;
        if(!idArr || !idArr.length) {
            res.json({status: 0, msg: '缺少参数'});
            return;
        }
        group_module.remove({_id: { $in: idArr }},(err,doc) => {
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

export default new Group()