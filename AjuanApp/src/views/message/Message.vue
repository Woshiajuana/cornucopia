<template>
    <view
        center_item_title="留言"
        left_item_img_src="">
        <item :right_text="user_name" @inputChange="inputChangeHandle"></item>
        <btn @onPress="sureHandle" class="btn"><text class="text">确认</text></btn>
        <text style="background-color: #3494E6">哈哈</text>
    </view>
</template>

<script>
    import View from '../../components/view/view.vue'
    import Item from '../../components/item/item.vue'
    import Btn from '../../components/btn/btn.vue'
    export default {
        data () {
            return{
                value: 0,
                user_name: '222222'
            }
        },
        computed: {
            userName () {
                return this.user_name;
            }
        },
        methods: {
            inputChangeHandle (new_val){
                console.log(new_val)
                this.user_name = new_val;
                console.log(this.user_name)
            },
            sureHandle (callback) {
                setTimeout(()=>{
                    console.log(222222);
                    callback();
                },1000)
            }
        },
        components: {
            View,
            Item,
            Btn
        }
    }
</script>

<style>
    .btn{
        margin-right: 40px;
        margin-left: 40px;
        height: 70px;
        background-color: red;
    }
    .text{
        line-height: 70px;
        text-align: center;
        font-size: 32px;
    }
</style>
