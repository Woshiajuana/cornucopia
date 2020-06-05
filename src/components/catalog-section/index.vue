<template>
    <div class="catalog-section">

    </div>
</template>

<script>
    export default {
        data () {
            return {
                numCurrent: 0,
                arrClassify: [
                    { label: '全部' },
                    { label: 'HTML / CSS' },
                    { label: 'Javascript / ES6' },
                    { label: 'Android' },
                    { label: 'iOS' },
                    { label: 'Flutter' },
                    { label: 'Nodejs' },
                    { label: '其他' },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";
    .catalog-section{
        @extend %pf;
        width: j(240);
    }
</style>
