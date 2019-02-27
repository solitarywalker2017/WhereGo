<template>
  <div id="list">
    <div class="item-list border-topbottom" v-for="(item,index) of this.list" :key="index">
      <p class="title">{{item.title}}</p>
      <div v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailList",
  props: ["list"]
};
</script>

<style lang="stylus" scoped>
#list .border-topbottom
  &:before
    border-color:#eee
  &:after
    border-color:#eee
.item-list
  background:#fff
  margin:.24rem 0
  padding: 0 .2rem
  .title
    height:.8rem
    line-height:.8rem
</style>
