
import Vue from 'vue'
// import hljs from 'highlight.js'

import App from 'src/App'
import router from 'src/router'
import store from 'src/store/index.js'
import curl from 'src/curl'
import Anchor from 'src/utils/anchor'
import dateUtil from 'src/utils/date.util'
import constant from 'src/constant'

import 'src/assets/lib/flexible.js'
import 'src/utils/es6-promise.util'

Vue.config.productionTip = false;
Vue.prototype.$curl = curl;
Vue.prototype.$anchor = new Anchor();
Vue.prototype.$date = dateUtil;
Vue.prototype.$const = constant;

// 在main.js定义自定义指令
// Vue.directive('highlight',function (el) {
//     let blocks = el.querySelectorAll('pre code');
//     blocks.forEach((block)=>{
//         hljs.highlightBlock(block)
//     })
// });

const vue = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
