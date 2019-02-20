<template>
    <div id="hotsale">
        添加到15个
         <p class="title"><img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">本周热门榜单</p>
         <swiper>
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="item"  v-for="item of page" :key="item.id">
                    <img :src="item.imgUrl" class="item-img"/>
                    <p class="item-title">{{item.title}}</p>
                    <p><span class="item-price">¥{{item.price}}</span>起</p>
                </div>
            </swiper-slide>
         </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: ["hotSaleList"],
  name: "HotSale",
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    pages: function () {
      const pages = [];
      this.hotSaleList.forEach(function (item, index) {
        var page = Math.floor(index / 3);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
#hotsale >>> .swiper-container
  padding:0 .48rem
  width:100%
#hotsale
  margin-top:.18rem
  background:#fff
  overflow:hidden
  width:100%
  height:0
  padding-bottom:53.6%
  padding-top:.3rem
  .title
    text-indent:.2rem
    padding-bottom: .3rem
    img
      width:.3rem
      height:.3rem
  .item
    display:inline-block
    float:left
    width:2.18rem
    height:3rem
      p
        text-align:center
        color:#616161
      .item-title
        color:#000
      .item-price
        color:#ff8300
  .item-img
    width:2rem
    height:2rem
    margin: .2rem auto
</style>
