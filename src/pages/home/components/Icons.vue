<template>
    <div id="icons">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(page,index) of pages" :key="index">
            <div class="icon" v-for="item of page" :key="item.id">
                <img class="icon-img" :src="item.url"/>
                <p class="icon-desc">{{item.desc}}</p>
            </div>
          </swiper-slide>
           <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: ["iconList"],
  name: "HomeIcons",
  components: {
    swiper,
    swiperSlide
  },
  data: function () {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        } // 显示底部圆点
      }
    };
  },
  computed: {
    pages: function () {
      const pages = [];
      this.iconList.forEach(function (item, index) {
        var page = Math.floor(index / 8);
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
@import "~@/assets/styles/var.styl"
@import "~@/assets/styles/mixins.styl"
#icons >>> .swiper-container
    // 宽高自适应
    overflow:hidden
    width:100%
    height:0
    padding-bottom:50%
#icons
    background:#fff
    margin-bottom:.01rem
    .icon
        overflow:hidden
        float:left
        width:25%
        height:0
        padding-bottom:25% // 相当于height:25%
        .icon-img
            display:block;
            width:1.04rem
            height:1rem
            padding:.1rem
            margin:0 auto
        .icon-desc
            height:.4rem
            line-height:.4rem
            text-align:center
            color:$darkFontColor
            ellipsis()
</style>
