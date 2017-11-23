import SWITCH_ENV from './switch_env'
import BD_IP from './ip_bd_config'
/**===================本地环境====================*/
const BD_ENV = {
    /**图片服务器*/
    PICTURE_URL: 'http://'+ BD_IP +':13140/static/images/',
    /**API地址*/
    API_URL: 'http://192.168.1.122:8001/jfpay_prepo_new/',
    /**JSON文件地址*/
    JSON_URL: 'http://'+ BD_IP +':13140/static/json/',
    /**用户上传图片的服务器地址*/
    UPLOAD_PICTURE_URL: 'http://192.180.3.134:9878/imgs/',
    ORG_CODE: '170330165348', // 机构号
    OPEN_PAY: 'https://test-dsopenpay.91dbq.com/', // 开放支付
    OPEN_PAY_UPLOAD: 'http://220.248.45.126:9527/', // 签购单
    API_NEXTPAY:'',
    /**js地址*/
    TREE_BASE_URL:'http://'+ BD_IP +':13140/dist/'
};

/**===================测试环境====================*/
const CS_ENV = {
    /**图片服务器*/
    PICTURE_URL: 'http://ptstatics.oss-cn-shanghai.aliyuncs.com/ds_cs/images/',
    /**API地址*/
    API_URL: 'http://192.168.1.122:8001/jfpay_prepo_new/',
    /**js地址*/
    TREE_BASE_URL:'http://ptstatics.oss-cn-shanghai.aliyuncs.com/ds_cs/js/0.0.1/'
};

/**===================准生产环境====================*/
const ZSC_ENV = {
    /**图片服务器*/
    PICTURE_URL: 'http://192.170.2.151:13140/static/images/',
    /**API地址*/
    API_URL: 'http://192.170.2.151:13140/',
    /**js地址*/
    TREE_BASE_URL:'123123'
};

/**===================生产环境====================*/
const SC_ENV = {
    /**图片服务器*/
    PICTURE_URL: 'http://192.170.2.151:13140/static/images/',
    /**API地址*/
    API_URL: 'http://192.170.2.151:13140/',
    /**js地址*/
    TREE_BASE_URL:'123123123'
};

var ENV = {};

switch (SWITCH_ENV) {
    case 'BD':
        ENV = BD_ENV;
        break;
    case 'CS':
        ENV = CS_ENV;
        break;
    case 'ZSC':
        ENV = ZSC_ENV;
        break;
    case 'SC':
        ENV = SC_ENV;
        break;
}

export default ENV;
