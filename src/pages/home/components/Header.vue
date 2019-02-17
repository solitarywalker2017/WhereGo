<template>
  <div id="header">
    <div class="back"><span class="iconfont">&#xe624;</span></div>
    <div class="search"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="location">{{this.city}}<span class="iconfont">&#xe64a;</span></div>
    </router-link>
  </div>
</template>

<style lang="stylus" scoped>
@import "~@/assets/styles/var.styl"
#header
  display:flex
  height:.88rem
  line-height:.88rem
  background:$themeColor
  color:#fff
  .back
    float:left
    margin:0 .36rem 0 .2rem
    width:.24rem
    height:.4rem
    span
      text-align:center
      font-size:.4rem
  .search
    flex:1
    height:.6rem
    line-height:.6rem
    margin: .16rem
    padding:0 .2rem
    background:#fff
    color:#eef
    border:0
    border-radius:.1rem
  .location
    float:right
    width:1.32rem
    text-align:center
    color:#fff
    span
      font-size:.2rem
</style>
<script>
export default {
  props: ["city"],
  name: "HomeHeader"
};
</script>
