
let BASE_URL = '';
let user = 'ajuan';
let { hostname } = window.location;
if (hostname.startsWith('1') || hostname.startsWith('localhost')) {
    BASE_URL = 'static/'
} else {
    user = location.hostname.substring(0, location.hostname.indexOf('.'));
    BASE_URL = `https://ftp.owulia.com/blog/${user}/`
}

let email = '979703986@qq.com';
let github = 'https://github.com/Woshiajuana';

if (user === 'jianyi') {
    email = '2356663674@qq.com';
    github = 'https://github.com/sujinnianhua';
} else if (user === 'taotao') {
    email = 'tao_huang_mail@163.com';
    github = 'https://github.com/taohuangmail';
}

let USER_NAME =  user.toLocaleUpperCase();

document.title = USER_NAME;

export default {
    USER_NAME,
    BASE_URL,
    EMAIL: email,
    GITHUB: github,
}
