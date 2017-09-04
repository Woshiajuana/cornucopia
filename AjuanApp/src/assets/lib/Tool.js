/**
 * Created by Administrator on 2017/5/2.
 */
const Tool = function () {
    let Tool = {};

    /**
     * 获取随机颜色
     * */
    Tool.getRandomColor = function(){
        return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).substr(-6);
    };

    /**
     * 格式化时间
     * */
    Tool.format = function(fmt,date) {
        var time = date || new Date();
        var o = {
            "M+" : time.getMonth()+1,
            "d+" : time.getDate(),
            "h+" : time.getHours(),
            "m+" : time.getMinutes(),
            "s+" : time.getSeconds(),
            "q+" : Math.floor((time.getMonth()+3)/3),
            "S"  : time.getMilliseconds()
        };
        if(/(y+)/.test(fmt)) {
            fmt=fmt.replace(RegExp.$1, (time.getFullYear()+"").substr(4 - RegExp.$1.length));
        }
        for(var k in o) {
            if(new RegExp("("+ k +")").test(fmt)){
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
            }
        }
        return fmt;
    };
    return Tool;
} ();
export default Tool;
