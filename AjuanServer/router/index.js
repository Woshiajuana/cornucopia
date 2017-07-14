/**
 * Created by Administrator on 2017/7/14.
 */
'use strict';

import home from './module/home'
import user from './module/user'

export default app => {
    app.get('/', (req, res, next) => {
        res.redirect('/home');
    });
    app.use('/home', home);
    app.use('/user', user);
}