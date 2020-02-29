<template>
    <div class="m-hcity">
        <dl>
            <dt>{{title}}</dt>
            <dd v-for="(item, index) in list" :key="index">{{item}}</dd>
        </dl>
    </div>
</template>
<script>
export default {
    data(){
        return{
            // title:"123",
            // list:["1","2"]
        }
    },
    props:[
        "title","list"
    ]
}
</script>
<style lang="scss">
@import "@/assets/css/changecity/hot.scss";
</style>