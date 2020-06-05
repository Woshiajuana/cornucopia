<template>
    <div class="menu-panel">
        <classify-section v-if="$route.path === '/'"></classify-section>
        <catalog-section v-else></catalog-section>
    </div>
</template>

<script>
    import ClassifySection from 'src/components/classify-section'
    import CatalogSection from 'src/components/catalog-section'

    export default {
        components: {
            ClassifySection,
            CatalogSection,
        }
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define";

    .menu-panel{
        width: j(240);
        margin-left: j(20);
    }
</style>
