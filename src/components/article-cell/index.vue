
<template>
    <div class="article-cell">
        <a class="title" :href="'#/details/' + data.id" v-html="computedTitle"></a>
        <p class="abstract" v-html="computedAbstract"></p>
        <div class="meta"></div>
    </div>
</template>

<script>
    export default {
        props: { data: { default: '' } },
        computed: {
            computedTitle () {
                let { search } = this.$route.query;
                let { title } = this.data;
                if (search) {
                    const reg = new RegExp('(' + search + ')', 'ig');
                    title = title.replace(reg, ('<strong>$1</strong>'));
                }
                return title;
            },
            computedAbstract () {
                let { search } = this.$route.query;
                let { abstract } = this.data;
                if (search) {
                    const reg = new RegExp('(' + search + ')', 'ig');
                    abstract = abstract.replace(reg, (`<strong>$1</strong>`));
                }
                return abstract;
            },
        }
    }
</script>

<style lang="scss">
    @import "~src/assets/scss/define";
    .article-cell{
        padding: j(20);
        border-bottom: 1px solid #ddd;
        &:last-child{
            border-bottom: none;
        }
        strong{
            color: red;
        }
    }
    .title{
        @extend %c3;
        @extend %db;
        @extend %fwb;
        font-size: j(17);
        line-height: j(27);
        margin-bottom: j(4);
        &:hover{
            text-decoration: underline;
        }
    }
    .abstract{
        @extend %c9;
        line-height: j(24);
        font-size: j(13);
    }
</style>
