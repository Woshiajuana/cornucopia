/**
 * Created by Administrator on 2017/4/18.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import types from './mutation-types.js'
import Util from '../assets/lib/Util'
Vue.use(Vuex);

/**
 * 数据存储
 * */
const state = {
    tab_index: 'all',
    tag_arr: [],
    tag_loading: false
};

const actions = {
    fetchTagList ( { commit } ) {
        commit(types.SET_TAG_LOADING,true);
        Util.fetchTagList().then( (result) => {
            setTimeout( () => {
                commit( types.SET_TAG_LOADING, false );
                if( result.status == 1 ) {
                    var tags = result.data.arr;
                    commit( types.INIT_TAG, tags );
                }
            },300)
        });
    }
};

/**
 * 模块
 * */
const modules = {

};

/**
 * 提交同步请求
 * */
const mutations = {
    /**全局设置MENU的tab选项值*/
    [ types.SET_TAB_INDEX ] (state,tab_index) {
        state.tab_index = tab_index;
    },
    /**全局设置MENU的文章类别*/
    [ types.INIT_TAG ] (state,tag_arr) {
        state.tag_arr = tag_arr;
    },
    /**全局设置MENU的loading*/
    [ types.SET_TAG_LOADING ] (state,tag_loading) {
        state.tag_loading = tag_loading;
    }
};

export default new Vuex.Store({
    state,
    modules,
    actions,
    mutations
})
