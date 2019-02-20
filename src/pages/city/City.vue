<template>
    <div id="city">
       <div class="header">
        <router-link to="/">
          <div class="back"><span class="iconfont">&#xe624;</span></div>
        </router-link>
        <p>城市选择</p>
      </div>
      <city-list :hotCities="hotCities" :cities="cities" :current="currentArea"></city-list>
      <alphabet :alphabet="alphabet" @selectedLetter="selectedLetter"></alphabet>
    </div>
</template>

<script>
import CityList from "./components/List";
import Alphabet from "./components/Alphabet";
import axios from "axios";
export default {
  name: "City",
  components: {CityList, Alphabet},
  data: function () {
    return {
      hotCities: [],
      cities: [],
      alphabet: [],
      currentArea: ""
    };
  },
  methods: {
    getMockData: function () {
      axios.get("/api/city.json").then((res) => {
        if (res.data.ret && res.data.data) {
          let data = res.data.data;
          this.hotCities = data.hotCities;
          this.cities = data.cities;
          for (var key in data.cities) {
            this.alphabet.push(key);
          }
        }
      });
    },
    selectedLetter: function (res) {
      this.currentArea = res;
    }
  },
  mounted () {
    this.getMockData();
  }
};
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/var.styl"
.header
  height:.8rem
  line-height:.8rem
  background:$themeColor
  color:#fff
  text-align:center
  .back
    float:left
    margin:0 .36rem 0 .2rem
    width:.24rem
    height:.4rem
    span
      text-align:center
      font-size:.4rem
      color:#fff
</style>
