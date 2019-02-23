<template>
  <div id="banner">
    <div @click="showGallery">
      <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg"/>
      <div class="back"><span class="iconfont">&#xe624;</span></div>
      <div class="album"><span class="iconfont">&#xe6dd;</span>8</div>
      <p class="desc">故宫(AAAAA景区)</p>
    </div>
    <gallery v-show="galleryStatus" :swiperList="this.swiperList" @close="showBanner"></gallery>
  </div>
</template>

<script>
import Gallery from "common/gallery/Gallery";
export default {
  name: "DetailBanner",
  components: {Gallery},
  data: function () {
    return {
      galleryStatus: false,
      swiperList: [
        "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg",
        "http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_r_800x800_6360f514.jpg",
        "http://img1.qunarzz.com/wugc/p180/201306/16/7f08e81624346b1693835fbb.jpg_r_800x800_5f03ad73.jpg",
        "http://img1.qunarzz.com/wugc/p123/201211/19/a2045d091f02b25493835fbb.png_r_800x800_c59f0eba.png",
        "http://img1.qunarzz.com/sight/p0/1410/e3/73da8d3e19cdc41c1932d4fcd22ec792.water.jpg_r_800x800_7f96ccf9.jpg",
        "http://img1.qunarzz.com/sight/p0/1410/9d/fe8109ab5df1c9c324e74284fa802e72.water.jpg_r_800x800_b9a5440a.jpg",
        "http://img1.qunarzz.com/wugc/p238/201306/16/d9090c728fed64eb93835fbb.jpg_r_800x800_7329a802.jpg",
        "http://img1.qunarzz.com/sight/p0/1501/af/af47583adca3f972.water.jpg_r_800x800_5a57e1fe.jpg"
      ]
    };
  },
  methods: {
    showGallery: function () {
      this.galleryStatus = true;
    },
    showBanner: function () {
      this.galleryStatus = false;
    }
  }
};
</script>

<style lang="stylus" scope>
#banner
  position:relative
  overflow:hidden
  width:100%
  height:0
  padding-bottom:53.33%
  color:#fff
  img
    width:100%
  .back
    position:absolute
    left:.2rem
    top:.1rem
    z-index:9
    width:.7rem
    height:.7rem
    line-height:.7rem
    text-align:center
    border-radius:50%
    background:#616970
    font-size:.4rem
  .album
    position:absolute
    left:.2rem
    bottom:.8rem
    padding:0 .24rem
    height:.4rem
    line-height:.4rem
    background:#7a7a7a
    border-radius:.5rem
    background:rgba(5,11,16,0.6);
    span
      margin-right:.2rem
  .desc
    position:absolute
    bottom:0
    z-index:9
    width:100%
    height:.66rem
    line-height:.66rem
    padding-left:.2rem
    background:linear-gradient(left,#7a7a7a,transparent)
</style>
