<template>
    <div class="page-index">
        <el-row>
            <el-col :span="5">
                <m-menu/>
            </el-col>
            <el-col :span="19">life</el-col>
        </el-row>
        <el-row>
            <el-col :span="24">container</el-col>
        </el-row>
    </div>
</template>
<script>
import MMenu from "@/components/index/menu.vue"
export default {
    components:{
        MMenu
    }
}
</script>
<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>