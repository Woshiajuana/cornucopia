<template>
    <div class="wrapper">
        <div class="search-header">
            <div class="search-header-return" @click="returnPageHandle"><div class="search-header-return-icon"></div></div>
            <input type="text" placeholder="请输入文章名" class="search-input"/>
            <svg class="search-input-close">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close-icon"></use>
            </svg>
        </div>
        <div class="search-inner search-label-wrap">
            <div class="search-label-section search-label-section-mar">
                <div class="search-label-top">
                    <text class="search-label-title">历史搜索</text>
                    <svg class="search-label-delete">
                        <path fill="#999999" d="M2.666,4.964c0-0.914,0.748-1.658,1.667-1.658h8.333l0-1.651C12.666,0.738,13.411,0,14.333,0h3.334
	c0.918,0,1.667,0.741,1.667,1.655v1.657h8.33c0.92,0,1.668,0.741,1.668,1.656v1.659H2.666V4.964z M27.664,9.928v3.311V30.34
	c0,0.92-0.747,1.66-1.667,1.66H6.001c-0.923,0-1.667-0.74-1.667-1.66V13.237V9.928V8.275h23.331V9.928L27.664,9.928z M10.999,13.239
	c0-0.913-0.75-1.658-1.669-1.658c-0.917,0-1.664,0.745-1.664,1.658l0,13.796c0,0.913,0.748,1.653,1.667,1.653
	c0.922,0,1.667-0.74,1.667-1.653V13.239L10.999,13.239z M17.668,13.239c0-0.913-0.752-1.658-1.668-1.658
	c-0.92,0-1.666,0.745-1.666,1.658l0,13.796c0,0.913,0.748,1.653,1.666,1.653c0.917,0,1.668-0.74,1.668-1.653V13.239z M24.332,13.239
	c0-0.913-0.75-1.658-1.668-1.658c-0.92,0-1.667,0.745-1.667,1.658v13.796c0,0.913,0.748,1.653,1.667,1.653s1.668-0.74,1.668-1.653
	V13.239z"/>
                    </svg>
                </div>
                <div class="search-label-con">
                    <text class="search-label-link">html</text>
                    <text class="search-label-link">javascript</text>
                    <text class="search-label-link">vue.js</text>
                    <text class="search-label-link">angular</text>
                    <text class="search-label-link">node.js</text>
                    <text class="search-label-link">css</text>
                    <text class="search-label-link">jquery</text>
                </div>
            </div>
            <div class="search-label-section">
                <text class="search-label-title">热门搜索</text>
                <div class="search-label-con">
                    <text class="search-label-link">html</text>
                    <text class="search-label-link">javascript</text>
                    <text class="search-label-link">vue.js</text>
                    <text class="search-label-link">angular</text>
                    <text class="search-label-link">node.js</text>
                    <text class="search-label-link">css</text>
                    <text class="search-label-link">jquery</text>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const navigator = weex.requireModule('navigator');
    export default {
        data (){
            return {

            }
        },
        methods: {
            returnPageHandle () {
                navigator.pop()
            }
        }
    }
</script>

<style>
    .wrapper {
        flex: 1;
        background-color: #fff;
    }
    .search-header{
        height: 110px;
        padding-top: 20px;
        padding-right: 20px;
        padding-left: 20px;
        padding-bottom: 20px;
        flex-direction: row;
    }
    .search-header-return{
        width: 70px;
        height:  70px;
    }
    .search-header-return-icon{
        position: absolute;
        transform: rotate(-135deg);
        left: 23px;
        width: 30px;
        height: 30px;
        top: 20px;
        content: '';
        border-top-color: #999;
        border-top-width: 5px;
        border-top-style: solid;
        border-right-color: #999;
        border-right-width: 5px;
        border-right-style: solid;
    }
    .search-input{
        flex: 1;
        border-radius: 70px;
        font-size: 28px;
        height: 70px;
        border: none;
        padding-right: 60px;
        padding-left: 32px;
        background-color: #f2f2f2;
    }
    .search-input-close{
        position: absolute;
        right: 40px;
        width: 32px;
        height: 32px;
    }
    .search-inner{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 110px;
    }
    .search-label-wrap{
        padding-left: 24px;
        padding-right: 24px;
    }
    .search-label-top{
        height: 70px;
    }
    .search-label-title{
        font-weight: bold;
        color: #666;
        font-size: 32px;
        height: 70px;
        line-height: 70px;
    }
    .search-label-section-mar{
        margin-bottom: 40px;
    }
    .search-label-delete{
        position: absolute;
        right: 0;
        width: 32px;
        height: 32px;
        top: 19px;
    }
    .search-label-con{
        flex-direction: row;
        flex-wrap: wrap;
    }
    .search-label-item{

    }
    .search-label-link{
        color: #666;
        font-size: 28px;
        height: 56px;
        line-height: 56px;
        padding-right: 10px;
        padding-left: 10px;
        background-color: #f2f2f2;
        margin-right: 24px;
        margin-bottom: 24px;
    }
</style>
