<template>
  <div id="header">
    <router-link to="/" class="header-abs back" tag="div" v-show="showAbs"><span class="iconfont back">&#xe624;</span></router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/" class="back" tag="div"><span class="iconfont">&#xe624;</span></router-link>
      <div class="item-title">景点详情</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data: function () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    showFixed: function () {
      const top = document.documentElement.scrollTop;
      if (top > 40) {
        // 40为.fixed的高度
        let opacity = top / 130;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  },
  // 后期使用keep-alive 改写Mounted
  mounted () {
    window.addEventListener("scroll", this.showFixed);
  },
  unmounted () {
    window.removeEventListener("scroll", this.showFixed);
  }

};
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/var.styl"
#header
  .header-abs
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
    .back
      font-size:.4rem
      color:#fff
  .header-fixed
     position:fixed
     top:0
     left:0
     right:0
     z-index:2
     height:.8rem
     line-height:.8rem
     background:$themeColor
     color:#fff
     text-align:center
     font-size:.32rem
     .back
        float:left
        margin:0 .36rem 0 .2rem
        width:.24rem
        height:.4rem

</style>
