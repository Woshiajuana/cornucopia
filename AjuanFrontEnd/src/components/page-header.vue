<template>
    <header class="header-wrap">
        <div class="nav-menu-btn" :class=" {'active':isOpenOrHideNavMenu} " @click="openOrHideNavMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <a href="#/" class="header-logo">
            <svg class="header-logo-icon">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo-icon"></use>
            </svg>
        </a>
        <svg class="directory-btn">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#directory-icon"></use>
        </svg>
    </header>
</template>
<script>
    import types from '../store/mutation-types'
    export default {
        name: 'header',
        computed: {
            isOpenOrHideNavMenu () {
                return this.$store.state.is_open_or_hide_nav_menu;
            }
        },
        methods: {
            openOrHideNavMenu () {
                this.$store.commit( types.OPEN_OR_HIDE_NAV_MENU, !this.$store.state.is_open_or_hide_nav_menu );
            }
        }
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .header-wrap{
        @extend %tac;
        @extend %pr;
        @extend %oh;
        height: 50px;
        background-color: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.08);
    }
    .nav-menu-btn{
        @extend %pa;
        @extend %cp;
        @extend %t50;
        left: 15px;
        margin-top: -6px;
        width: 16px;
        height: 12px;
        span{
            @extend %pa;
            @extend %w100;
            @extend %r0;
            @include tst(all,.5s);
            height: 2px;
            background-color: #ccc;
            &:nth-child(1){
                @extend %t0;
            }
            &:nth-child(2){
                @extend %t50;
                opacity: 1;
                margin-top: -1px;
            }
            &:nth-child(3){
                @extend %b0;
            }
        }
        &.active{
            span{
                &:nth-child(1){
                    top: 5px;
                    @include tfr(45deg)
                }
                &:nth-child(2){
                    opacity: 0;
                    right: -100%;
                }
                &:nth-child(3){
                    bottom: 5px;
                    @include tfr(135deg)
                }
            }
        }
    }
    .header-logo{
        @extend %pa;
        @extend %t50;
        @extend %l50;
        margin-left: -45px;
        margin-top: -16px;
        height: 32px;
        width: 90px;
    }
    .header-logo-icon{
        @extend %w100;
        @extend %h100;
        fill: #f15556;
    }
    .directory-btn{
        @extend %pa;
        @extend %cp;
        @extend %t50;
        right: 15px;
        margin-top: -10px;
        width: 20px;
        height: 20px;
        fill: #ccc;
    }
</style>
