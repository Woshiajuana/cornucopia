<template>
    <div class="wrapper" @click="update">
        <div class="turntable-wrap" @click="turnHandle">
            <image ref="turntable" class="turntable-bg" :src="turntable_img"></image>
            <image class="turntable-pointer" :src="pointer_img"></image>
        </div>
    </div>
</template>

<script>
    const animation = weex.requireModule('animation');
    const modal = weex.requireModule('modal');
    import TurnTableController from './turntable'
    export default {
        data: {
            turnTable: new TurnTableController({
                angle_range: [
                    [0,45],
                    [46,90],
                    [91,135],
                    [136,180],
                    [181,225],
                    [226,270],
                    [271,315],
                    [316,360]
                ]
            }),
            prize_arr: ['猪头','美女','小可爱','吃货','傻瓜','蠢蛋','笨蛋','狗头'],
            turntable_img: 'http://www.owulia.com/ink/static/turntable.png',
            pointer_img: 'http://www.owulia.com/ink/static/pointer.png'
        },
        methods: {
            turnHandle () {
                this.index = Math.floor(Math.random() * 8);
                this.turnTable.start( this.$refs.turntable, this.index, () => {
                    modal.toast({ message: '恭喜你是一个' + this.prize_arr[this.index] + '!!!' });
                });
            }
        }
    }

</script>

<style>
    .wrapper {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #5e7885;
    }
    .turntable-wrap{
        position: relative;
        width: 420px;
        height: 420px;
    }
    .turntable-bg{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }
    .turntable-pointer{
        position: absolute;
        width: 20px;
        height: 140px;
        top: 80px;
        left: 200px;
    }
</style>
