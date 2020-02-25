<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col class="left" :span="3">
        <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" />
      </el-col>
      <el-col class="center" :span="15">
        <div class="wrapper">
          <el-input v-model="searchWord" @focus="focus" @blur="blur" placeholder="请输入内容"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotPlaceList" :key="index">
              <router-link :to="{name:'goods', params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item, index) in searchList" :key="index">
              <router-link :to="{name:'goods', params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#" v-for="(item, index) in suggestList" :key="index">{{item}}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchWord: "",
      isFocus: false,
      hotPlaceList: ["第1个", "第2个", "第3个", "第4个"],
      searchList: ["火锅1", "火锅2", "火锅3", "火锅4"],
      suggestList: ["第1个", "第2个", "第3个", "第4个"]
    };
  },
  computed: {
    isHotPlace: function() {
      return this.isFocus && !this.searchWord;
    },
    isSearchList: function() {
      return this.isFocus && this.searchWord;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      let _this = this;
      setTimeout(function() {
        _this.isFocus = false;
      }, 200);
    }
  }
};
</script>
<style lang="scss">
// @import '@/assets/css/public/header/search';
</style>