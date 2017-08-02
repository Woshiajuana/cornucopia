/**
 * Created by Administrator on 2017/7/14.
 */
'use strict';

import express from 'express'
import Group from '../../controller/group/group'
/**引入token中间键*/
import checkApiToken from '../../middlewares/check_api_token'

const router = express.Router();

router.post('/add', checkApiToken, Group.add);
router.post('/edit', checkApiToken, Group.edit);
router.post('/info', checkApiToken, Group.info);
router.post('/list', checkApiToken, Group.list);
router.post('/delete', checkApiToken, Group.del);
router.post('/deletes', checkApiToken, Group.dels);

export default router