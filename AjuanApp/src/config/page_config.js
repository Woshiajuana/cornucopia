/**
 * Created by Administrator on 2017/10/18.
 */

import config from '../config/env_config';
import ENV from '../config/switch_env';
var fix2number =  function (n) {
    return [0,n].join('').slice(-2);
}
var getTime = function(format) {
    var curDate = new Date();
    if (format == undefined) return curDate;
    format = format.replace(/Y/i, curDate.getFullYear());
    format = format.replace(/m/i, fix2number(curDate.getMonth() + 1));
    format = format.replace(/d/i, fix2number(curDate.getDate()));
    format = format.replace(/H/i, fix2number(curDate.getHours()));
    format = format.replace(/i/i, fix2number(curDate.getMinutes()));
    format = format.replace(/s/i, fix2number(curDate.getSeconds()));
    format = format.replace(/ms/i, curDate.getMilliseconds());
    return format;
}
var pagelist = require("json!../../tree_history/"+ENV+"/tree_v"+getTime("y_M_d")+".json")
const page_controller = {
    // 'home': config.TREE_BASE_URL + 'home/home.js',
    // 'test': config.TREE_BASE_URL + 'test.js',
};
for(var item in pagelist.resource){
    page_controller[item] = config.TREE_BASE_URL+pagelist.resource[item]
}
export default page_controller;
