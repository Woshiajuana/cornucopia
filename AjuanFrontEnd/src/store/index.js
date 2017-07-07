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
    is_open_or_hide_nav_menu: false,
    is_open_or_hide_set_up: false,
    is_open_or_hide_mask: false
};

const actions = {

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
    /**打开或关闭菜单选项*/
    [ types.OPEN_OR_HIDE_NAV_MENU ] ( state, is_open_or_hide_nav_menu ) {
        state.is_open_or_hide_nav_menu = is_open_or_hide_nav_menu;
    },
    /**打开或关闭设置*/
    [ types.OPEN_OR_HIDE_SET_UP ] ( state, is_open_or_hide_set_up ) {
        state.is_open_or_hide_set_up = is_open_or_hide_set_up;
    },
    /**打开或关闭遮罩*/
    [ types.OPEN_OR_HIDE_MASK ] ( state, is_open_or_hide_mask ) {
        state.is_open_or_hide_mask = is_open_or_hide_mask;
    }
};

export default new Vuex.Store({
    state,
    modules,
    actions,
    mutations
})
