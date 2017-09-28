<template>
    <view
        center_item_title="留言"
        left_item_img_src="">
        <item :right_text="user_name" @inputChange="inputChangeHandle"></item>
    </view>
</template>

<script>
    import View from '../../components/view/view.vue'
    import Item from '../../components/item/item.vue'
    import UserInput from '../../components/user-input.vue'
    export default {
        data () {
            return{
                value: 0,
                user_name: ''
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
            }
        },
        components: {
            View,
            Item,
            UserInput
        }
    }
</script>

<style>

</style>
