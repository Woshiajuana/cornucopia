/**
 * Created by Administrator on 2017/7/14.
 */
'use strict';
/**引入数据库模型*/
import user_module from '../../models/user'
/**引入token工具*/
import jwt from 'jsonwebtoken';
class User {
    constructor (){

    }
    async login(req, res, next){
        /**这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')*/
        if(!req.body.user_name) {
            res.json({status: 0, msg: '请输入帐号'});
            return;
        }
        if(!req.body.user_password) {
            res.json({status: 0, msg: '请输入密码'});
            return;
        }
        let user = {
            user_name: req.body.user_name,
            user_password: req.body.user_password
        };
        user_module.find(user, function(err, doc){
            if(doc.length){
                /**创建token*/
                let token = jwt.sign(user, 'app.get(superSecret)', {
                    expiresIn: 60*60*24 /**设置过期时间*/
                });
                res.json({
                    status: 1,
                    msg: '登陆成功',
                    data: {
                        token,
                        user: {
                            _id: doc[0]._id,
                            user_name: doc[0].user_name
                        }
                    }
                });
            }else{
                res.json({
                    status: 0,
                    msg: '帐号或密码不正确'
                });
            }
        });
    }
}

export default new User()