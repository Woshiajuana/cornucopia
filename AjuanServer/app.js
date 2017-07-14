/**
 * 创建服务端后台主要文件
 * */

/**引入配置文件*/
import DEFAULT from './config/DEFAULT'

/**引入路由接口文件*/
import router from './router/index'

/**引入处理post数据的模块*/
import bodyParser from 'body-parser';

/**引入Express*/
import express from 'express';

/**创建一个express实例*/
const app = express();

/**解决跨域问题*/
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.send(200); /让options请求快速返回/
    }
    else {
        next();
    }
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

router(app);

app.use((err, req, res, next) => {
    res.status(404).send('未找到当前路由');
});

/**监听8088端口*/
app.listen( DEFAULT.PORT );

console.log('success listen…………');