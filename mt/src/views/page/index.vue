<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu />
      </el-col>
      <el-col :span="19">
        <m-life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <MContainer :nav="iStyle" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <MContainer :nav="iStyle"/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import MMenu from "@/components/index/menu.vue";
import MLife from "@/components/index/life.vue";
import MContainer from "@/components/index/container.vue";
export default {
  data() {
    return {
      iStyle: {
        title: "有格调",
        list: [
          {
            text: "全部",
            tab: "all"
          },
          {
            text: "约会聚餐",
            tab: "food"
          },
          {
            text: "丽人SPA",
            tab: "spa"
          },
          {
            text: "电影演出",
            tab: "movie"
          },
          {
            text: "品质出游",
            tab: "travel"
          }
        ]
      }
    };
  },
  components: {
    MMenu,
    MLife,
    MContainer
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>