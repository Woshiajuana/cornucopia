/**
 * Created by Administrator on 2017/7/14.
 */
'use strict';

import express from 'express'
import Article from '../../controller/article/article'

const router = express.Router();

router.post('/add', Article.add);
router.post('/edit', Article.edit);
router.post('/info', Article.info);
router.post('/list', Article.list);
router.post('/delete', Article.del);
router.post('/deletes', Article.dels);
router.post('/up_or_down', Article.up_or_down);
router.post('/up_or_downs', Article.up_or_downs);

export default router