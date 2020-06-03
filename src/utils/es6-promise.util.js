
import Vue from 'vue'

Promise.prototype.toast = function () {
    return this.catch(err => {
        let text = typeof err === 'object'
            ? err.errMsg || err.Message || err.message || JSON.stringify(err)
            : err + '';
        Vue.prototype.$vux.toast.show({ text });
    });
};

Promise.prototype.null = function () {
    return this.catch(err => {
        console.log(err);
    });
};

Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(
        value => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => { throw reason })
    );
};
