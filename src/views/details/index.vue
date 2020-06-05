<template>
    <div class="details-view-wrap">
        <div class="article-header" v-if="strContent">
            <h1>第一章好 i 哦对大时代萨蒂简欧</h1>
            <p class="time">2020-09-09 12:12:12</p>
            <div class="tag">
                <span class="tag-item">HTML</span>
                <span class="tag-item">CSS</span>
                <span class="tag-item">JS</span>
            </div>
        </div>
        <div class="article-content" v-html="strContent"></div>
    </div>
</template>
<script>
    import marked from 'marked'

    export default {
        data () {
            return {
                strContent: '',
            }
        },
        watch: {
            //监听路由变化
            $route( to, from ){
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            }
        },
        created () {
            this.$curl.get('static/test.md').then((res) => {
                this.strContent = marked(res);
            })
        }
    }

</script>
<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    @import "~src/assets/scss/highlight";

    .details-view-wrap{
    }
    .article-header{
        padding: j(50) 0;
        h1{
            @extend %c3;
            line-height: j(40);
            font-size: j(30);
        }
        .time{
            @extend %c9;
            padding-left: j(5);
            font-size: j(12);
            margin: j(10) 0;
        }
    }
    .tag{
        @extend %df;
        @extend %aic;
        //@extend %jcc;
    }
    .tag-item{
        @extend %cfff;
        font-size: j(12);
        margin: 0 j(4);
        border-radius: j(2);
        padding: j(2) j(5);
        background-color: #999;
    }
    .article-content{
        color: #404040;
        line-height: j(28);
        font-size: j(16);
        padding: j(20) j(20) j(100);
    }
</style>
