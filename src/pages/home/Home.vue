<template>
  <div id="app">
    <home-header :city="city"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <hot-sale :hotSaleList="hotSaleList"></hot-sale>
    <home-fav></home-fav>
    <weekend></weekend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HotSale from "./components/HotSale";
import HomeFav from "./components/Fav";
import Weekend from "./components/Weekend";
import axios from "axios";
export default {
  components: { HomeHeader, HomeSwiper, HomeIcons, HotSale, HomeFav, Weekend },
  name: "Home",
  data: function () {
    return {
      city: "",
      swiperList: [],
      iconList: [],
      hotSaleList: []
    };
  },
  methods: {
    getMockData: function () {
      axios.get("/api/beijing.json").then((res) => {
        if (res.data.ret && res.data.data) {
          let data = res.data.data;
          this.city = data.city;
          this.swiperList = data.SwiperimgUrl;
          this.iconList = data.iconList;
          this.hotSaleList = data.hotSaleList;
        }
      });
    }
  },
  mounted () {
    this.getMockData();
  }
};
</script>

<style>
</style>
