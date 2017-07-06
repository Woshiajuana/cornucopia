<template>
    <el-breadcrumb v-if="$route.meta.crumb" separator="/">
        <template v-for="(item,index) in $route.meta.crumb">
            <el-breadcrumb-item v-if=" item.path && item.params " :key="index" :to="{ path: item.path + '/' + $route.params[item.params] }">
                <i v-if="item.icon" :class="item.icon"></i> {{ item.con }}</el-breadcrumb-item>
            <el-breadcrumb-item v-else-if=" item.path " :key="index" :to="{ path: item.path }">
                <i v-if="item.icon" :class="item.icon"></i> {{ item.con }}</el-breadcrumb-item>
            <el-breadcrumb-item v-else :key="index">
                <i v-if="item.icon" :class="item.icon"></i> {{ item.con }}</el-breadcrumb-item>
        </template>
    </el-breadcrumb>
</template>
<script>
    export default {
        name: 'crumb'
    }
</script>
