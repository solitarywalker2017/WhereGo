<template>
  <div id="swiper">
  <swiper :options="swiperOption" v-if="showSwiperList">
    <swiper-slide v-for="(item,index) of this.swiperList" :key="index">
      <img class="swiper-img" :src="item"/>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>
<style lang="stylus" scoped>

// 穿透
#swiper >>> .swiper-pagination-bullet-active
  background:#fff
#swiper
  // 图片自适应
  overflow:hidden
  width:100%
  height: 0
  padding-bottom:26.67%
  background:#eee
  .swiper-img
    width:100%
</style>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: [ "swiperList" ],
  name: "HomeSwiper",
  components: {
    swiper,
    swiperSlide
  },
  data: function () {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        } // 显示底部圆点
      }
    };
  },
  computed: {
    // 避免加载未完成时出现bug
    showSwiperList: function () {
      return this.swiperList.length;
    }
  }
};
</script>
