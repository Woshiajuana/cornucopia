/**
 * vuex数据控制中心
 * */
import Vue from 'vue'
import Vuex from 'vuex'
import types from './mutation-types.js'

Vue.use(Vuex);

// 数据存储
const state = {
    animateName: '',
    arrCatalog: [], // 目录
    arrSourceCatalog: [], // 数据元目录
};

// 模块
const modules = {

};

// 提交同步请求
const mutations = {
    // 全局判断前进回退的动画
    [ types.SET_ANIMATE_NAME ] (state, animateName) {
        state.animateName = animateName;
    },

    // 生成
    [ types.SET_CATALOG ] (state, {el, value}) {
        if (value) {
            return state.arrCatalog = value;
        }
        const objHLevel = [ 'H2', 'H3', 'H4', 'H5', 'H6', 'H7' ];
        let children = Array.from(el.children)
            .filter((item) => objHLevel.indexOf(item.nodeName) > -1)
            .map((item, index) => {
                let id = `heading-${index + 1}`;
                item.id = `heading-${index + 1}`;
                return {
                    id,
                    level: objHLevel.indexOf(item.nodeName) + 1,
                    title: item.innerHTML,
                    offsetTop: item.offsetTop - 70,
                }
            }).reverse();
        let arrSourceCatalog = [...children].reverse();
        arrSourceCatalog.forEach((item, index) => {
            item.start = index === 0 ? 0 : item.offsetTop;
            item.end = arrSourceCatalog.length === index + 1 ? Infinity : arrSourceCatalog[index + 1].offsetTop;
        });
        state.arrSourceCatalog = arrSourceCatalog;
        let result = [], loop;
        (loop = (nodes) => {
            let node = nodes.splice(0, 1)[0];
            if (!node) return;
            for (let i = 0, len = nodes.length; i < len; i++) {
                let item = nodes[i];
                if (item.level < node.level) {
                    node.parent = true;
                    if (!item.children) {
                        item.children = [];
                    }
                    item.children.unshift(node);
                    break;
                }
            }
            if (!node.parent) {
                result.unshift(node)
            }
            loop(nodes);
        }) (children);
        state.arrCatalog = result;
    }
};

export default new Vuex.Store({
    state,
    modules,
    mutations
})
