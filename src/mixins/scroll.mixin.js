
export default {

    data () {
        return {
            scroll$: {
                top: 0,
            }
        }
    },

    created () {
        window.addEventListener('scroll', (event) => {
            this.scroll$.top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            this.scrollCallback && this.scrollCallback(event);
        });
    },

}
