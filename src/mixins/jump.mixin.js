
export default {
    methods: {
        jumpPageOrFireFn (item) {
            let { fn, link, url } = item;
            if (fn) {
                return this[fn](item);
            }
            if (link) {
                return window.open(link);
            }
            if (url) {
                this.$router.push({ path: url, query: item });
            }
        }
    }
}
