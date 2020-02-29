<template>
  <div class>
    <span class="name">
      按省份选择：
      <m-select
        :list="provinceList"
        title="省份"
        :value="province"
        :showWrapperActive="provinceActive"
        @change_active="changeProvinceActive"
      />
      <m-select
        :list="cityList"
        title="城市"
        :value="city"
        :showWrapperActive="cityActive"
        @change_active="changeCityActive"
      />
      <span>直接搜索：</span>
      <el-select
        v-model="searchWord"
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
      </el-select>
    </span>
  </div>
</template>
<script>
import MSelect from "./select";
export default {
  data() {
    return {
      provinceList: [
        "山东",
        "广东",
        "北京",
        "上海",
        "深圳",
        "东莞",
        "清远",
        "广东",
        "北京",
        "上海",
        "深圳",
        "东莞",
        "清远",
        "广东",
        "北京",
        "上海",
        "深圳",
        "东莞",
        "清远",
        "广东",
        "北京",
        "上海",
        "深圳",
        "东莞",
        "清远",
        "广东",
        "北京",
        "上海",
        "深圳",
        "东莞",
        "清远",
        "广东",
        "北京",
        "上海",
        "深圳",
        "东莞",
        "清远",
        "广东",
        "北京",
        "上海",
        "深圳",
        "东莞",
        "清远",
        "广东",
        "北京",
        "上海",
        "深圳",
        "东莞",
        "清远"
      ],
      province: "省份",
      cityList: [
        "哈尔滨",
        "哈尔滨",
        "哈尔滨",
        "哈尔滨",
        "哈尔滨",
        "哈尔滨",
        "哈尔滨"
      ],
      city: "城市",
      provinceActive: false,
      cityActive: false,
      searchList: [
        "哈尔滨2",
        "哈尔滨3",
        "哈尔滨4",
        "哈尔滨5",
        "哈尔滨6",
        "哈尔滨7",
        "哈尔滨8"
      ],
      searchWord: "",
      loading: false
    };
  },
  components: {
    MSelect
  },
  methods: {
    changeProvinceActive(flag) {
      if (flag) this.cityActive = false;
      this.provinceActive = flag;
    },
    changeCityActive(flag) {
      if (flag) this.provinceActive = false;
      this.cityActive = flag;
    },
    remoteMethod(e) {
      console.log(e);
      this.searchWord = e;
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>
