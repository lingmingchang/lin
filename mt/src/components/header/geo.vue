<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location" />
      北京
      <router-link class="changeCity" :to="{name:'changeCity'}">切换城市</router-link>
      [
        <a href="#">广东 </a>
        <a href="#">广州 </a>
        <a href="#">白云区金沙洲</a>
      ]
      <div class="m-user">
        <router-link class="login" :to="{name:'login'}">立即登录</router-link>
        <router-link class="register" :to="{name:'register'}">注册</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>