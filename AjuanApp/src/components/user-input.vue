<template>
    <div class="input-wrap"
         :style="styles"
         :class="{'active':is_active || input_value,'open': is_open}">
        <input placeholder="11111111" :readonly="readonly" class="input-con" type="text" @input="change" v-model="input_value" @focus="focusFun" @blur="blurFun"/>
    </div>
</template>
<script>
    export default {
        name: 'user-input',
        props: [ 'type', 'placeholder', 'value', 'styles', 'selectArr', 'readonly'],
        created () {
            console.log(22222)
            this.input_value = this.value;
        },
        data () {
            return {
                is_active: false,
                input_value: '',
                is_open: false
            }
        },
        computed: {
            inputValue () {
                return this.input_value ? this.input_value.key : '';
            }
        },
        methods: {
            clearInput () {
                this.input_value = '';
                if(!this.selectArr) this.focus();
            },
            change () {
                this.$emit('changeValue',this.input_value);
            },
            focus () {
                this.$el.getElementsByTagName('input')[0].focus()
            },
            selectValue (item) {
                this.focusFun();
                this.input_value = item;
                this.is_open = false;
                this.is_active = false;
            },
            blurFun () {
                setTimeout( () => {
                    this.is_active = false;
                    this.is_open = false;
                },100)
            },
            focusFun () {
                this.is_active = true;
                this.is_open = true;
            }
        },
        watch: {
            value (val) {
                this.input_value = val
            },
            input_value (newVal) {
                this.$emit('input', newVal);
            }
        }
    }
</script>
<style>
    .input-wrap{
        width: 750px;
        height: 100px;
    }
    .input-con{
        flex: 1;
    }
</style>
