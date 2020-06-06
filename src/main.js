
import Vue from 'vue'

import App from 'src/App'
import router from 'src/router'
import store from 'src/store/index.js'
import curl from 'src/curl'
import Anchor from 'src/utils/anchor'

import 'src/assets/lib/flexible.js'
import 'src/utils/es6-promise.util'

Vue.config.productionTip = false;
Vue.prototype.$curl = curl;
Vue.prototype.$anchor = new Anchor();

const vue = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
