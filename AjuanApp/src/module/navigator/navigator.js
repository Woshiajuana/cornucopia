var navigator = weex.requireModule('navigator');
export default {
    /**压入*/
    push: ( { url, animated = 'true', close = '' }, params ) => {
        close && (close = 'true');
        url = params ? url + '?params=' + encodeURIComponent(JSON.stringify(params)) : url;
        navigator.push({ url: url, animated: animated, close: close }, e => {});
    },
    /**弹出*/
    pop: (animated = 'true') => {
        navigator.pop({ animated: animated });
    },
    /**获取参数*/
    params: (weex) => {
        var bundleUrl = weex.$getConfig().bundleUrl;
        var params = bundleUrl.substr(bundleUrl.indexOf("?params=") + 8);
        return JSON.parse(decodeURIComponent(decodeURIComponent(params)));
    }
}
