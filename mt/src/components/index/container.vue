<template>
  <div class="m-istyle">
    <dl @mouseover="over" v-if="nav">
      <dt>{{nav.title}}</dt>
      <dd v-for="(item, index) in nav.list" :key="index" :class="{active:kind === item.tab}" :data-type="item.tab">{{item.text}}</dd>
      <!-- <dd :class="{active:kind === 'all'}" data-type="all">全部</dd>
      <dd :class="{active:kind === 'food'}" data-type="food">约会聚餐</dd>
      <dd :class="{active:kind === 'spa'}" data-type="spa">丽人SPA</dd>
      <dd :class="{active:kind === 'movie'}" data-type="movie">电影演出</dd>
      <dd :class="{active:kind === 'travel'}" data-type="travel">品质出游</dd> -->
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in list" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_info.current_price}}</span>
              </span>
              <span class="old-price">门市价¥{{item.price_info.old_price}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      kind: "all",
      list: [
        {
          image:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          title: "大董（王府井店1）",
          sub_title: "酥不腻小雏鸭套餐，建议2人使用",
          price_info: {
            current_price: 18,
            old_price: 36,
            avg_price:null,
            units:null
          },
          address: "王府井/东单",
          rentNull:0
        },
        {
          image:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          title: "大董（王府井店）2",
          sub_title: "酥不腻小雏鸭套餐，建议2人使用",
          price_info: {
            current_price: 18,
            old_price: 36
          },
          address: "王府井/东单"
        },
        {
          image:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          title: "大董（王府井店）3",
          sub_title: "酥不腻小雏鸭套餐，建议2人使用",
          price_info: {
            current_price: 18,
            old_price: 36
          },
          address: "王府井/东单"
        },
        {
          image:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          title: "大董（王府井店）",
          sub_title: "酥不腻小雏鸭套餐，建议2人使用",
          price_info: {
            current_price: 18,
            old_price: 36
          },
          address: "王府井/东单"
        },
        {
          image:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          title: "大董（王府井店）",
          sub_title: "酥不腻小雏鸭套餐，建议2人使用",
          price_info: {
            current_price: 18,
            old_price: 36
          },
          address: "王府井/东单"
        },
        {
          image:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          title: "大董（王府井店）",
          sub_title: "酥不腻小雏鸭套餐，建议2人使用",
          price_info: {
            current_price: 18,
            old_price: 36
          },
          address: "王府井/东单"
        }
      ]
    };
  },
  props: ["nav"],
  created(){
      console.log(this.nav)
    //   console.log(this.nav.title)
  },
  methods: {
    over(e) {
      let dom = e.target,
        tagName = dom.tagName.toLowerCase();
      if (tagName !== "dd") {
        return false;
      }
      // this.kind = dom.dataset.type;
      this.kind = dom.getAttribute("data-type");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/index/artistic.scss";
</style>