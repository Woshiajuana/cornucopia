/**
 * Created by Administrator on 2017/7/14.
 */
'use strict';

import express from 'express'
import Tag from '../../controller/tag/tag'
/**引入token中间键*/
import checkApiToken from '../../middlewares/check_api_token'

const router = express.Router();

router.post('/add', checkApiToken, Tag.add);
router.post('/edit', checkApiToken, Tag.edit);
router.post('/info', checkApiToken, Tag.info);
router.post('/list', checkApiToken, Tag.list);
router.post('/delete', checkApiToken, Tag.del);
router.post('/deletes', checkApiToken, Tag.dels);

/**h5*/
router.post('/v1/h5/list', Tag.list);

export default router