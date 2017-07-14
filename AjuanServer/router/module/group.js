/**
 * Created by Administrator on 2017/7/14.
 */
'use strict';

import express from 'express'
import Group from '../../controller/group/group'

const router = express.Router();

router.post('/add', Group.add);
router.post('/edit', Group.edit);
router.post('/info', Group.info);
router.post('/list', Group.list);
router.post('/delete', Group.del);

export default router