<template>
  <div class="page-changeCity">
    <el-row>
        <province />
    </el-row>
    <el-row>热门城市</el-row>
    <el-row>最近访问</el-row>
    <el-row>城市列表</el-row>
  </div>
</template>
<script>
import Province from "@/components/changeCity/province";
export default {
    components:{
        Province
    }
}
</script>