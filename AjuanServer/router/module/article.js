/**
 * Created by Administrator on 2017/7/14.
 */
'use strict';

import express from 'express'
import Article from '../../controller/tag/tag'

const router = express.Router();

router.post('/add', Article.add);
router.post('/edit', Article.edit);
router.post('/info', Article.info);
router.post('/list', Article.list);
router.post('/delete', Article.del);
router.post('/deletes', Article.dels);

export default router