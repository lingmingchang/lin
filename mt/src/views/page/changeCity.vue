<template>
  <div class="page-changeCity">
    <el-row>
        <province />
    </el-row>
    <el-row>
      <hot title="热门城市" :list="hotList"/>
    </el-row>
    <el-row>
      <hot title="热门城市" :list="hotList"/>
    </el-row>
    <el-row>
      <category />
    </el-row>
  </div>
</template>
<script>
import Province from "@/components/changeCity/province";
import Hot from "@/components/changeCity/hot";
import Category from "@/components/changeCity/category";
export default {
  data(){
    return{
      hotList:[
        "哈尔滨2",
        "哈尔滨3",
        "哈尔滨4",
        "哈尔滨5",
        "哈尔滨6",
        "哈尔滨7",
        "哈尔滨8"
      ]
    }
  },
    components:{
        Province,
        Hot,
        Category
    }
}
</script>