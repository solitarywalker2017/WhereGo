<template>
  <div id="list" ref="wrapper">
    <div>
      <!--  suitable for BScroll   -->
      <div class="area">
        <p class="title border-topbottom">热门城市</p>
        <ul id="list-hot">
          <li class="hot-item" v-for="item of this.hotCities" :key="item.id" :spell="item.spell">{{item.name}}</li>
        </ul>
      </div>
      <div class="area" v-for="(city,index) of this.cities":key="index">
        <p class="title border-topbottom">{{index}}</p>
        <ul>
            <li class="list-district border-topbottom"  v-for="item of city":key="item.id" :spell="item.spell">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: ["hotCities", "cities"],
  name: "CityList",
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper);
  }
};
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/var.styl"
.border-topbottom
  &:before
    border-color:#ccc
  &:after
    border-color:#ccc
/* 固定List,让出头部 */
#list
  overflow:hidden
  position:absolute
  top:0.8rem
  left:0
  right:0
  bottom:0
  .title
    height:.7rem
    line-height:.7rem
    background:#f5f5f5
    padding-left:.3rem
    font-size:.26rem
  #list-hot
    padding:.12rem
    overflow:hidden
    .hot-item
      float:left
      margin:.12rem
      padding:.12rem
      width:25%
      border:.02rem solid $themeColor
      border-radius:.06rem
      text-align:center
  .list-district
    height:.76rem
    line-height:.76rem
    padding-left:.2rem
</style>
