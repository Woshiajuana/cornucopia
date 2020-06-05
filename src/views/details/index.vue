<template>
    <div class="details-view-wrap">
        详情
    </div>
</template>
<script>
    export default {
        watch: {
            //监听路由变化
            $route( to, from ){
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            }
        },
        components: {

        },
    }

</script>
<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .details-view-wrap{
        height: j(2000);
    }
    .classify{
        @extend %ps;
        top: j(70);
    }
</style>
