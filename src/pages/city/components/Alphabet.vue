<template>
  <div id="list">
    <div class="item" v-for="(item,index) of this.alphabet" :key="index"
    @click="selectArea" :ref="item"
    @touchstart="handleTouchStart"  @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    >{{item}}</div>
  </div>
</template>

<script>
export default {
  name: "Alphabet",
  props: [ "alphabet" ],
  data: function () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null  // 延迟执行时间
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop; // 获取起始高度
  },
  methods: {
    selectArea: function (e) {
      this.$emit("selectedLetter", e.target.innerText); // 获取字母
    },
    // 处理拖动滚动
    handleTouchStart: function () {
      this.touchStatus = true;
    },
    handleTouchMove: function (e) {
      if (this.touchStatus) {
        if(this.timer){
          clearTimeout();
        }
        setTimeout(() => {
          const touchY = e.touches[0].clientY - 40; // 40为顶部高度
          const index = Math.floor((touchY - this.startY) / 20); // 20为一个.item的高度
          if (index >= 0 && index < this.alphabet.length) {
             this.$emit("selectedLetter", this.alphabet[index]);
          }
        },16);
      }
    },
    handleTouchEnd: function () {
      this.touchStatus = false;
    }
  }
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
