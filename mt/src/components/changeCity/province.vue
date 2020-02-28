<template>
  <div class>
    <span class="name">
      按省份选择：
      <m-select :list="provinceList" title="省份" :value="province"/>
      <m-select :list="cityList" title="城市" :value="city" />
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
      city: "城市"
    };
  },
  components: {
    MSelect
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>
