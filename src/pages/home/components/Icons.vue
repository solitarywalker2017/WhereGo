<template >
    <div id="icons">
      <swiper :option="swiperOption">
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
        }
      },
      iconList: [
        {id: 1, desc: "景点门票", url: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"},
        {id: 2, desc: "一日游", url: "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png"},
        {id: 3, desc: "北京必游", url: "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png"},
        {id: 4, desc: "遛娃儿", url: "http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png"},
        {id: 5, desc: "爬长城", url: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png"},
        {id: 6, desc: "故宫", url: "http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png"},
        {id: 7, desc: "北京庙会", url: "http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png"},
        {id: 8, desc: "北京滑雪", url: "http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png"},
        {id: 9, desc: "泡温泉", url: "http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png"},
        {id: 10, desc: "冰雪季", url: "http://img1.qunarzz.com/piao/fusion/1803/b2/bfbc5d66e0ab5a02.png"}
      ]
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
    width:100%
    height:0
    padding-bottom:50%
#icons
    background:#fff
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
