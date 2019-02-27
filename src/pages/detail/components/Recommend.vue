<template>
  <div id="recommend">
   <p class="title border-bottom"><i class="iconfont">&#xe611;</i>去哪儿推荐</p>
   <div class="item border-topbottom">
    <div>
      <p class="item-title">【当日票】故宫成人票凭身份证入园 （随买随用，快速入园）</p>
      <p class="item-time"><i class="iconfont">&#xe623;</i>15:30前随买随用</p>
      <span class="item-label">自营</span>
      <span class="item-label">无需换票</span>
      <span class="item-label">条件退</span>
    </div>
    <div>
      <span class="item-price">¥40</span>
      <div class="item-book">预订</div>
    </div>
   </div>
   <div class="item border-topbottom">
    <div>
      <p class="item-title">【当日票】故宫成人票凭身份证入园 （随买随用，快速入园）</p>
      <p class="item-time"><i class="iconfont">&#xe623;</i>15:30前随买随用</p>
      <span class="item-label">自营</span>
      <span class="item-label">无需换票</span>  
      <span class="item-label">条件退</span>
    </div>
    <div>
      <span class="item-price">¥40</span>
      <div class="item-book">预订</div>
    </div>
   </div>
   <div class="item border-topbottom">
    <div>
      <p class="item-title">【当日票】故宫成人票凭身份证入园 （随买随用，快速入园）</p>
      <p class="item-time"><i class="iconfont">&#xe623;</i>15:30前随买随用</p>
      <span class="item-label">自营</span>
      <span class="item-label">无需换票</span>
      <span class="item-label">条件退</span>
    </div>
    <div class="item-book-container">
      <span class="item-price">¥40</span>
      <div class="item-book">预订</div>
    </div>
   </div>
  </div>
</template>

<script>
export default {
  name: "Recommend"
};
</script>

<style lang="stylus" scoped>
#recommend .border-topbottom
  &:before
    border-color:#eee
  &:after
    border-color:#eee
#recommend
  padding: 0 .2rem
  background:#fff
  .title
    height:.9rem
    line-height:.9rem
    .iconfont
      color:red
  .item
    padding:.3rem 0
    display:flex
    flex-redirection:row
    color:#616161
    .item-time
      margin:.08rem 0
      .iconfont
        color:#00bcd4
        font-size:.3rem
    .item-label
      display:inline-block
      margin:.08rem .03rem 0
      padding:0 .1rem
      height:.3rem
      border:.02rem solid #ddf5f8
      border-radius:.2rem
      color:#00b6d6
    .item-price
      display:block
      text-align:center
      color:#ff9800
      font-size:.36rem
    .item-book
      width:1.6rem
      height:.6rem
      line-height:.6rem
      text-align:center
      border-radius:.2rem
      background:#ffab1e
      color:#fff
</style>
