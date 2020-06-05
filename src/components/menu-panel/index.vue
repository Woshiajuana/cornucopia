<template>
    <div class="menu-panel">
        <classify-section v-if="$route.meta.useClassify"></classify-section>
        <catalog-section v-if="$route.meta.useCatalog"></catalog-section>
    </div>
</template>

<script>
    import ClassifySection from 'src/components/classify-section'
    import CatalogSection from 'src/components/catalog-section'
    // import CopyrightSection from 'src/components/copyright-section'

    export default {
        components: {
            ClassifySection,
            CatalogSection,
            // CopyrightSection,
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
