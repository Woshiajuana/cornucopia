var navigator = weex.requireModule('navigator');
export default {
    push: (input, parmas) => {
        if (!defer.do(input + JSON.stringify(parmas))) return null; // 过滤连续点击
        loading.show();
        let pagename = _.isObject(input) ? input.url : input;
        let animated = _.isObject(input) ? input.animated:  'true';
        let close = _.isObject(input) ? input.close:  '';
        var nativepath = parmas ? nativepath + '?parmas=' + encodeURIComponent(JSON.stringify(parmas)) : nativepath;
        navigator.push({ url: nativepath, animated: animated, close: close }, e => {});
    },
    pop: (animated = 'true') => {
        navigator.pop({ animated: animated }, e => {});
    },
}
