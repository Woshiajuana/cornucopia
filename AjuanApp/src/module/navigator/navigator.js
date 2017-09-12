var navigator = weex.requireModule('navigator');
export default {
    push: ( { url, animated = 'true', close = '' }, params ) => {
        url = params ? url + '?params=' + encodeURIComponent(JSON.stringify(params)) : url;
        navigator.push({ url: url, animated: animated, close: close }, e => {});
    },
    pop: (animated = 'true') => {
        navigator.pop({ animated: animated });
    }
}
