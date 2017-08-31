<template>
    <div class="wrapper" @click="update">
        <!--<div class="turntable-wrap" @click="turnHandle">-->
            <!--<image ref="turntable" class="turntable-bg" :src="turntable_img"></image>-->
            <!--<image class="turntable-pointer" :src="pointer_img"></image>-->
        <!--</div>-->
        <svg style="width: 100px; height: 100px; fill: #000000;">
            <path fill="#000000" d="M21.715,4.728C12.176,4.728,4.443,12.461,4.443,22s7.733,17.272,17.272,17.272S38.987,31.539,38.987,22
	S31.254,4.728,21.715,4.728z M21.715,37.405c-8.508,0-15.404-6.897-15.404-15.404S13.207,6.596,21.715,6.596S37.12,13.492,37.12,22
	S30.223,37.405,21.715,37.405z M21.716,13.927c-0.361,0.396-0.547,0.877-0.547,1.433c0,0.457,0.149,0.856,0.441,1.164
	c0.298,0.314,0.683,0.476,1.121,0.476c0.356,0,0.885-0.109,1.368-0.646c0.377-0.407,0.568-0.896,0.568-1.441
	c0-0.447-0.154-0.837-0.449-1.14C23.575,13.111,22.407,13.183,21.716,13.927L21.716,13.927z M23.06,25.423
	c-0.463,0.441-0.787,0.717-1.003,0.891c0.106-0.572,0.381-1.706,1.045-3.939c0.661-2.213,0.719-2.599,0.719-2.789
	c0-0.331-0.139-0.624-0.379-0.827c-0.54-0.446-1.492-0.357-2.643,0.294c-0.641,0.36-1.323,0.947-2.083,1.781l-0.397,0.441
	l1.316,1.015l0.337-0.333c0.366-0.355,0.615-0.587,0.78-0.741c-1.005,3.305-1.495,5.359-1.495,6.28c0,0.417,0.121,0.763,0.366,1.026
	c0.247,0.269,0.593,0.41,0.99,0.41c0.388,0,0.833-0.15,1.373-0.457c0.487-0.276,1.219-0.88,2.242-1.842l0.414-0.397l-1.197-1.165
	L23.06,25.423L23.06,25.423z"/></svg>
        <svg-template></svg-template>
    </div>
</template>

<script>
    const animation = weex.requireModule('animation');
    const modal = weex.requireModule('modal');
    import TurnTableController from './assets/lib/turntable'
    import SvgTemplate from './components/svg-template.vue'
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
        },
        components: {
            SvgTemplate
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
        top: 90px;
        left: 200px;
    }
</style>
