
export default {

    data () {
        return {
            scroll$: {
                scrollTop: 0, // 已滚动区域
                scrollHeight: 0, // 可滚动区域
                clientHeight: 0, // 可见区域高度
            }
        }
    },

    created () {
        window.addEventListener('scroll', (event) => {
            this.scroll$.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            this.scroll$.scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            this.scroll$.clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
            this.scrollCallback && this.scrollCallback(event);
        });
    },

}
