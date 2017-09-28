<template>
    <div @click="pressHandle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'btn',
        props: {
            type: { default: true }
        },
        data () {
            return {

            }
        },
        methods: {
            pressHandle (event) {
                this.type && this.$emit('onPress', ()=>{
                    this.type = true;
                });
                this.type = false;
            }
        }
    }
</script>

<style>
    .btn{
        background-color: red;
    }
</style>
