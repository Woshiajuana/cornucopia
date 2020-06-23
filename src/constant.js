

let BASE_URL = '';
let user = 'ajuan';
let { hostname } = window.location;
if (hostname.startsWith('1') || hostname.startsWith('xlocalhost')) {
    BASE_URL = 'static'
} else {
    user = location.hostname.substring(0, location.hostname.indexOf('.'));
    user = 'ajuan';
    BASE_URL = `https://ftp.owulia.com/blog/${user}/`
}


export default {
    USER_NAME: user.toLocaleUpperCase(),
    BASE_URL,
}
