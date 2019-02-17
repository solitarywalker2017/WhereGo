<template>
  <div id="list">
    <div class="item" v-for="(item,index) of this.alphabet":key="index">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: "Alphabet",
  props: [ "alphabet" ]
};
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/var.styl"
#list
  display: flex
  flex-direction: column
  justify-content: center
  position: absolute
  top: .8rem
  right: 0
  bottom: 0
  width: .4rem
  .item
    line-height: .4rem
    text-align: center
    color: $themeColor
</style>
