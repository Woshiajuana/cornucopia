var navigator = weex.requireModule('navigator');
var modal = weex.requireModule('modal');
export default {
    push: ( { url, animated = 'true', close = '' }, params ) => {
        close && (close = 'true');
        modal.toast({message: 'close:'+close});
        url = params ? url + '?params=' + encodeURIComponent(JSON.stringify(params)) : url;
        navigator.push({ url: url, animated: animated, close: 'true' }, e => {});
    },
    pop: (animated = 'true') => {
        navigator.pop({ animated: animated });
    }
}
