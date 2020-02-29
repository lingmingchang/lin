<template>
    <div class="category">
        <dl class="m-category">
            <dt>按拼音自字母选择：</dt>
            <dd v-for="(item, index) in list" :key="index">
                <a :href="'#city-' + item">{{item}}</a>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:"ABCDEFGHIZKLMNOPQRSTUVWXYZ".split(""),
            
        }
    }
}
</script>
<style lang="scss">
@import "@/assets/css/changecity/category.scss";
</style>