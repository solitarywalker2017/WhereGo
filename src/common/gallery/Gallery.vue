<template>
  <div id="gallery" @click="closeGallery">
    <div class="wrapper">
      <swiper :options="swiperOption">
         <swiper-slide v-for="(item,index) of this.swiperList" :key="index">
          <img class="swiper-img" :src="item"/>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Gallery",
  props: ["swiperList"],
  data: function () {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        observer: true, // 当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
        observeParents: true
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    closeGallery: function () {
      this.$emit("close");
    }
  }
};
</script>

<style lang="stylus" scope>
#gallery >>> .swiper-container
  overflow:inherit
#gallery
  display:flex
  flex-direction:column
  justify-content:center
  position:fixed
  top:0
  right:0
  bottom:0
  left:0
  z-index:90
  background:#000
  .wrapper
      overflow:hidden
      width:100%
      height:0
      padding-bottom:100%
      img
        width:100%
        height:6.8rem
      .swiper-pagination
        color:#fff
</style>
