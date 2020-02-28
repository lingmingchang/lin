<template>
  <div class="choose-wrap" @click="showWrapper" v-document-click="documentClick">
    <div class="choose">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div class="mt-content" :class="{'active':showWrapperActive}">
        <h2>{{title}}</h2>
        <div class="wrapper">
          <div class="col">
            <span class="mt-item" v-for="(item, index) in list" :key="index">{{item}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showWrapperActive: false
    };
  },
  props: ["list", "title", "value"],
  methods: {
    showWrapper(el) {
      el.stopPropagation();
      this.showWrapperActive = true;
    },
    documentClick() {
        console.log(44444)
      this.showWrapperActive = false;
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>