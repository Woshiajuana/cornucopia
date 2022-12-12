# thepalestink

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



## 一. Author

> Ajuan <979703986@qq.com>

![blockchain](https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=702257389,1274025419&fm=27&gp=0.jpg "区块链")

<center>

![GitHub set up](http://zh.mweb.im/asset/img/set-up-git.gif "图片Title")

![GitHub set up](/static/images/zp-icon.png "图片Title")

</center>

[简书](http://jianshu.com)

#允许跨域请求的域，* 代表所有
add_header 'Access-Control-Allow-Origin' *;
#允许带上cookie请求
add_header 'Access-Control-Allow-Credentials' 'true';
#允许请求的方法，比如 GET/POST/PUT/DELETE
add_header 'Access-Control-Allow-Methods' *;
#允许请求的header
add_header 'Access-Control-Allow-Headers' *;


#证书文件名称
ssl_certificate cert/8979973_www.daysnap.cn.pem;
#私钥文件名称
ssl_certificate_key cert/8979973_www.daysnap.cn.key;
ssl_session_timeout 5m;
#请按照以下协议配置
ssl_protocols TLSv1.2 TLSv1.3;
#请按照以下套件配置，配置加密套件，写法遵循 openssl 标准。
ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
ssl_prefer_server_ciphers on;


```
server{
        listen 80;
        server_name dev.daysnap.cn;
        # rewrite ^(.*)$ https://${server_name}$1 permanent; #设置http自动转发https

        add_header 'Access-Control-Allow-Origin' *;
        add_header 'Access-Control-Allow-Credentials' 'true';
        add_header 'Access-Control-Allow-Methods' *;
        add_header 'Access-Control-Allow-Headers' *;

        root         /web/dev/;

        location / {
                # root /web/dev/;
                autoindex on;
                index index.html index.htm;
        }

        error_page 404 /404.html;
                location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
                location = /50x.html {
        }
}

server {
        listen 443 ssl;
        server_name  dev.daysnap.cn;

        # 证书文件名称
        ssl_certificate cert/8979994_dev.daysnap.cn.pem;
        # 私钥文件名称
        ssl_certificate_key cert/8979994_dev.daysnap.cn.key;
        ssl_session_timeout 5m;
        # 请按照以下协议配置
        ssl_protocols TLSv1.2 TLSv1.3;
        # 请按照以下套件配置，配置加密套件，写法遵循 openssl 标准。
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
        ssl_prefer_server_ciphers on;

        # 解决跨域
        add_header 'Access-Control-Allow-Origin' *;
        add_header 'Access-Control-Allow-Credentials' 'true';
        add_header 'Access-Control-Allow-Methods' *;
        add_header 'Access-Control-Allow-Headers' *;

        root         /web/dev/;

        # Load configuration files for the default server block.
        # include /etc/nginx/default.d/*.conf;

        location / {
                # root /web/dev/;
                autoindex on;
                index index.html index.htm;
        }

        error_page 404 /404.html;
                location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
                location = /50x.html {
        }
}
```


```
set fileencodings=utf-8,gb2312,gb18030,gbk,ucs-bom,cp936,latin1
set enc=utf8
set fencs=utf8,gbk,gb2312,gb18030

set fileencodings=utf-8,gb2312,gbk,gb18030
set termencoding=utf-8
set fileformats=unix
set encoding=prc
```
