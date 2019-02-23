<template>
    <div id="fav">
        <p class="title"><img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">猜你喜欢</p>
        <ul>
              <router-link :to="'/detail/'+item.id" class="fav-item border-bottom" tag="li"
                v-for="item of favList" :key="item.id" :ref="item.id">
                      <img  class ="fav-item-img" :src="item.imgUrl"/>
                      <span class="fav-item-tip">{{item.tip}}</span>
                      <div class="fav-item-desc">
                          <p class="item-title">{{item.title}}</p>
                          <p>
                              <span class="item-score">{{item.score}}星星组件</span>
                              <span class="item-comments">{{item.comments}}条评论</span>
                          </p>
                          <p>
                              <span class="item-price"><mark>¥{{item.price}}</mark>起</span>
                              <span class="item-location">{{item.location}}</span>
                          </p>
                          <p class="item-intro">{{item.intro}}</p>
                      </div>
              </router-link>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeFav",
  data () {
    return {
      favList: []
    };
  },
  methods: {
    getMockData: function () {
      axios.get("/api/fav.json").then((res) => {
        if (res.data.ret && res.data.data) {
          this.favList = res.data.data.favList;
        }
      });
    }
  },
  mounted () {
    this.getMockData();
  }
};
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/mixins.styl"
#fav
    background:#fff
    margin:0.24rem 0
    padding: .3rem
    .title
        height:1.6rem
        line-height:1.6rem
        text-indent:.2rem
        img
            width:.3rem
            height:.3rem
    .fav-item
        overflow:hidden
        height:0
        padding-bottom:41.86%
        margin-bottom:.2rem
        background:#fff
        min-width:0
        .fav-item-img
            float:left
            position:absolute
            width:2rem
            height: 2rem
            margin-right:.35rem
        .fav-item-tip
            position:relative
            z-index:3
            top:-2.5px
            left:0
            width: 1.04rem
            height:.4rem
            line-height:.4rem
            background:#ffab1e
            color:#fff
            font-size:10px
            border-radius:0 0 .1rem 0
        .fav-item-desc
            float:right
            width:4.4rem
            p
                margin:.2rem 0
            .item-title
                font-size:15px
                height:.5rem
                line-height:.5rem
            .item-price > mark
               color: #ff8300
               font-size:16px
            .item-comments, .item-location
                clear:both
                float:right
                color:#616161
                margin-left:.3rem
            .item-intro
                margin: .6rem 0
                color:#ff5555
                ellipsis()
</style>
