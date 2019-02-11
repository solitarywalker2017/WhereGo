<template>
    <div id="hotsale">
         <p class="title"><img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">本周热门榜单</p>
         <swiper :options="swiperOption">
            <swiper-slide>
                <div class="item">
                    <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg" class="item-img"/>
                    <p class="item-title">故宫</p>
                    <p><span class="item-price">¥20</span>起</p>
                </div>
                <div class="item">
                    <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg" class="item-img"/>
                    <p class="item-title">故宫</p>
                    <p><span class="item-price">¥20</span>起</p>
                </div>
                <div class="item">
                    <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg" class="item-img"/>
                    <p class="item-title">故宫</p>
                    <p><span class="item-price">¥20</span>起</p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="item">
                    <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg" class="item-img"/>
                    <p class="item-title">故宫</p>
                    <p><span class="item-price">¥20</span>起</p>
                </div>
                <div class="item">
                    <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg" class="item-img"/>
                    <p class="item-title">故宫</p>
                    <p><span class="item-price">¥20</span>起</p>
                </div>
                <div class="item">
                    <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg" class="item-img"/>
                    <p class="item-title">故宫</p>
                    <p><span class="item-price">¥20</span>起</p>
                </div>
            </swiper-slide>
         </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "HotSale",
  components: {
    swiper,
    swiperSlide
  },
  data: function () {
    return {
      swiperOption: {}
    };
  }
};
</script>

<style lang="stylus" scoped>
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
            margin:0 .15rem
            width:2.18rem
            height:3rem
            p
                text-align:center
                color:#616161
            .item-img
                width:2rem
                height:2rem
                margin: .2rem auto
            .item-title
                color:#000
            .item-price
                color:#ff8300

</style>
