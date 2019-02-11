<template>
  <div id="app">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <hot-sale></hot-sale>
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
export default {
  components: { HomeHeader, HomeSwiper, HomeIcons, HotSale, HomeFav, Weekend },
  name: "Home"
};
</script>

<style>
</style>
