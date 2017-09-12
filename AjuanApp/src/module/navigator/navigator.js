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
    }
}
