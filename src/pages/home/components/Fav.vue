<template>
    <div id="fav">
        <p class="title"><img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">猜你喜欢</p>
        <ul>
            <li class="fav-item border-bottom">
                    <img  class ="fav-item-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg"/>
                    <span class="fav-item-tip">随买随用</span>
                    <div class="fav-item-desc">
                        <p class="item-title">故宫</p>
                        <p>
                            <span class="item-score">星星组件</span>
                            <span class="item-comments">345831条评论</span>
                        </p>
                        <p>
                            <span class="item-price"><mark>¥20</mark>起</span>
                            <span class="item-location">东城区</span>
                        </p>
                        <p class="item-intro">世界五大宫之首，穿越与您近在咫尺</p>
                    </div>
            </li>
             <li class="fav-item border-bottom">
                    <img  class ="fav-item-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg"/>
                    <span class="fav-item-tip">随买随用</span>
                    <div class="fav-item-desc">
                        <p class="item-title">故宫</p>
                        <p>
                            <span class="item-score">星星组件</span>
                            <span class="item-comments">345831条评论</span>
                        </p>
                        <p>
                            <span class="item-price"><mark>¥20</mark>起</span>
                            <span class="item-location">东城区</span>
                        </p>
                        <p class="item-intro">世界五大宫之首，穿越与您近在咫尺</p>
                    </div>
            </li>
             <li class="fav-item border-bottom">
                    <img  class ="fav-item-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg"/>
                    <span class="fav-item-tip">随买随用</span>
                    <div class="fav-item-desc">
                        <p class="item-title">故宫</p>
                        <p>
                            <span class="item-score">星星组件</span>
                            <span class="item-comments">345831条评论</span>
                        </p>
                        <p>
                            <span class="item-price"><mark>¥20</mark>起</span>
                            <span class="item-location">东城区</span>
                        </p>
                        <p class="item-intro">世界五大宫之首，穿越与您近在咫尺</p>
                    </div>
            </li>
             <li class="fav-item border-bottom">
                    <img  class ="fav-item-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg"/>
                    <span class="fav-item-tip">随买随用</span>
                    <div class="fav-item-desc">
                        <p class="item-title">故宫</p>
                        <p>
                            <span class="item-score">星星组件</span>
                            <span class="item-comments">345831条评论</span>
                        </p>
                        <p>
                            <span class="item-price"><mark>¥20</mark>起</span>
                            <span class="item-location">东城区</span>
                        </p>
                        <p class="item-intro">世界五大宫之首，穿越与您近在咫尺</p>
                    </div>
            </li>
             <li class="fav-item border-bottom">
                    <img  class ="fav-item-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg"/>
                    <span class="fav-item-tip">随买随用</span>
                    <div class="fav-item-desc">
                        <p class="item-title">故宫</p>
                        <p>
                            <span class="item-score">星星组件</span>
                            <span class="item-comments">345831条评论</span>
                        </p>
                        <p>
                            <span class="item-price"><mark>¥20</mark>起</span>
                            <span class="item-location">东城区</span>
                        </p>
                        <p class="item-intro">世界五大宫之首，穿越与您近在咫尺</p>
                    </div>
            </li>
             <li class="fav-item border-bottom">
                    <img  class ="fav-item-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg"/>
                    <span class="fav-item-tip">随买随用</span>
                    <div class="fav-item-desc">
                        <p class="item-title">故宫</p>
                        <p>
                            <span class="item-score">星星组件</span>
                            <span class="item-comments">345831条评论</span>
                        </p>
                        <p>
                            <span class="item-price"><mark>¥20</mark>起</span>
                            <span class="item-location">东城区</span>
                        </p>
                        <p class="item-intro">世界五大宫之首，穿越与您近在咫尺</p>
                    </div>
            </li>
        </ul>
        <p class="showall">查看所有产品</p>
    </div>
</template>

<script>
export default {
  name: "HomeFav"
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
            width:4.8rem;
            p
                margin:.2rem 0
            .item-title
                font-size:15px
                letter-spacing:.2rem
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
    .showall
        text-align:center
        color:#00afc7
</style>
