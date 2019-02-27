<template>
  <div id="detail">
    <detail-header></detail-header>
    <detail-banner></detail-banner>
    <recommend></recommend>
    <detail-list :list="list"></detail-list>
  </div>
</template>

<script>
import DetailHeader from "./components/Header";
import DetailBanner from "./components/Banner";
import Recommend from "./components/recommend";
import DetailList from "./components/list";
export default {
  name: "Detail",
  components: {DetailHeader, DetailBanner, Recommend, DetailList},
  data: function () {
    return {
      list:[
        {title: "故宫预售老年票",
         children:[
          {title: "上午场",
          children:[]} ,
          { title: "下午场",
          children:[]}
        ]
        },
        {title: "故宫预售学生票"},
        {title: "珍宝馆/钟表馆(不含故宫大门票)"},
        {title: "门票+导游讲解"},
        {title: "故宫礼物"}
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
#detail
  background:#f5f5f5
</style>
