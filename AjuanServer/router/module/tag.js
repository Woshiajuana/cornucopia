/**
 * Created by Administrator on 2017/7/14.
 */
'use strict';

import express from 'express'
import Tag from '../../controller/tag/tag'

const router = express.Router();

router.post('/add', Tag.add);
router.post('/edit', Tag.edit);
router.post('/info', Tag.info);
router.post('/list', Tag.list);
router.post('/delete', Tag.del);
router.post('/deletes', Tag.dels);

export default router