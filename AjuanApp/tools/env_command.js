var path = require('path');
var fs = require('fs-extra');
var ENV = process.env.NODE_ENV;

fs.writeFileSync(path.join(__dirname, '../src/config/switch_env.js'),'export default "'+ ENV +'";',"utf-8");

var data = fs.readFileSync(path.join(__dirname, '../src/config/switch_env.js'),"utf-8");

if (data.indexOf('BD') > -1) {
    console.log("=============================本地环境打包================================");
    var ip = getIPAdress();
    fs.writeFileSync(path.join(__dirname, '../src/config/ip_bd_config.js'),'export default "'+ ip +'";',"utf-8");
    var read_ip = fs.readFileSync(path.join(__dirname, '../src/config/ip_bd_config.js'),"utf-8");
    console.log("=============="+ read_ip +"================");
} else if (data.indexOf('CS') > -1) {
    console.log("=============================测试环境打包================================")
} else if (data.indexOf('ZSC') > -1) {
    console.log("=============================准生产环境打包================================")
} else if (data.indexOf('SC') > -1) {
    console.log("=============================生产环境打包================================")
}
function getIPAdress(){
    var interfaces = require('os').networkInterfaces();
    for(var devName in interfaces){
        var iface = interfaces[devName];
        for(var i=0;i<iface.length;i++){
            var alias = iface[i];
            if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
                return alias.address;
            }
        }
    }
}
