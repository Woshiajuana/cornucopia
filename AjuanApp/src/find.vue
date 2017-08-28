<template>
    <div class="wrapper" @click="update">
       发现
    </div>
</template>

<script>
    const animation = weex.requireModule('animation');
    const modal = weex.requireModule('modal');
    import TurnTableController from './assets/lib/turntable'
    export default {
        data: {
            turnTable: new TurnTableController({
                duration: 5000,
                speed: 360 * 10,
                angle_range: [
                    [0,45],
                    [45,90],
                    [90,135],
                    [135,180],
                    [180,225],
                    [225,270],
                    [270,315],
                    [315,360]
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
        font-size: 72px;
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
        top: 90px;
        left: 200px;
    }
</style>
