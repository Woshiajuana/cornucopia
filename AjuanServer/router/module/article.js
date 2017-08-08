/**
 * Created by Administrator on 2017/7/14.
 */
'use strict';

import express from 'express'
import Article from '../../controller/article/article'
/**引入token中间键*/
import checkApiToken from '../../middlewares/check_api_token'

const router = express.Router();

router.post('/add', checkApiToken, Article.add);
router.post('/edit', checkApiToken, Article.edit);
router.post('/info', checkApiToken, Article.info);
router.post('/list', checkApiToken, Article.list);
router.post('/delete', checkApiToken, Article.del);
router.post('/deletes', checkApiToken, Article.dels);
router.post('/up_or_down', checkApiToken, Article.up_or_down);
router.post('/up_or_downs', checkApiToken, Article.up_or_downs);

/**h5*/
router.post('/v1/h5/list', Article.list);

export default router