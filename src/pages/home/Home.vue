<template>
  <div id="app">
    <home-header></home-header>
    <slider></slider>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import Slider from "./components/Slider";
export default {
  components: { HomeHeader, Slider },
  name: "Home"
};
</script>

<style>
</style>
