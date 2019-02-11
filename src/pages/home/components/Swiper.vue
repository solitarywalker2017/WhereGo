<template>
  <div id="swiper">
  <swiper :options="swiperOption">
    <swiper-slide v-for="(item,index) of imgUrl" :key="index">
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
      },
      imgUrl: [
        "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/e9b6ede83785c7673eb1bcda5a78f123.jpg_750x200_0e6d0de9.jpg",
        "http://img1.qunarzz.com/piao/fusion/1811/a8/cb43c4ac6c215d02.jpg_750x200_83dee994.jpg",
        "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/a211765c0bb579b18c6e7d6d75997a48.jpg_750x200_b6921fa6.jpg",
        "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/3921acb51460dc6fa9e3c7464fac5cbb.jpg_750x200_d992573a.jpg",
        "http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg"
      ]
    };
  }
};
</script>
