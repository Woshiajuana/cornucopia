/**
 * Created by Administrator on 2017/7/14.
 */
'use strict';

import express from 'express'
import User from '../../controller/user/user'

const router = express.Router();

router.get('/login', User.login);

export default router