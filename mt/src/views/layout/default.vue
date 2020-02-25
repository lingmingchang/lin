<template>
  <div class="layout-defalute">
    <el-container>
      <el-header height="">
          <my-header />
      </el-header>
      <el-main>
        <index />
      </el-main>
      <el-footer height="">
        <my-footer />
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import MyHeader from '@/components/header/index'
import MyFooter from '@/components/footer/index'
import Index from '@/views/page/index'
export default {
    components:{
        MyHeader,
        MyFooter,
        Index
    }
}
</script>
<style lang="scss">
@import "@/assets/css/public/layout.scss";
</style>