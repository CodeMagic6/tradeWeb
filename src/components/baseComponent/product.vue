<!--  -->
<template>
  <!--product start-->
  <div class="product wd">
    <div class="product-title">
      <h1>PRODUCTS</h1>
      <div class="more1"></div>
    </div>
    <div class="product-con">
      <div class="jt-left1"
        @click="turnPic('left')"></div>
      <div class="jt-right1"
        @click="turnPic('right')"></div>
      <div id="pro-con">
        <ul class="pro-list fx-row fx-m-start"
          id="pro-list">
          <li class="fx-no-shrink"
            v-for="n in 6"
            :key="n"
            :style="{transform: 'translateX('+moveX+'px)'}">
            <div class="pro-img"><img src="../../images/userfiles/product/solor5LED/00.jpg"/></div>
            <div>{{n}}solar power bank</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!--product end-->
</template>

<script>
// 产品的宽度 宽+右边空白
let proWidth = 314;
let num = 0;
// 产品的个数
let productLength = 6;
export default {
  data() {
    return {
      moveX: 0
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    // 切换上一张，下一张图片
    turnPic(direc) {
      if (direc === 'left' && num < 0) {
        num += 1;
      } else if (direc === 'right' && num > -productLength + 3) {
        num -= 1;
      }
      this.moveX = num * proWidth;
    }
  }
};
</script>
<style lang='scss' scoped>
.product {
  clear: both;
}
.product .product-title {
  height: 37px;
  line-height: 35px;
  background: url(../../images/p_line.jpg) no-repeat left bottom;
}
.product .product-title h1 {
  font-size: 14px;
  color: #005da0;
  background: url(../../images/bfk.jpg) no-repeat left center;
  padding-left: 15px;
  float: left;
}
.more1 {
  float: right;
  width: 38px;
  height: 14px;
  background: url(../../images/more1.jpg) no-repeat;
  margin-top: 11px;
  margin-right: 6px;
}

.product-con {
  clear: both;
  margin-top: 20px;
}
.product-con .jt-left1 {
  cursor: pointer;
  width: 25px;
  height: 338px;
  background: url(../../images/jt_left1.jpg) no-repeat left center;
  float: left;
}
.product-con .jt-right1 {
  cursor: pointer;
  width: 25px;
  height: 338px;
  background: url(../../images/jt_right1.jpg) no-repeat left center;
  float: right;
}

#pro-con {
  float: left;
  width: 944px;
  height: 338px;
}
.pro-list {
  clear: both;
  overflow: hidden;
}
.pro-list li {
  box-sizing: border-box;
  float: left;
  width: 299px;
  height: 338px;
  text-align: center;
  line-height: 30px;
  margin-right: 15px;
  font-size: 12px;
}
.pro-list li .pro-img {
  display: block;
  overflow: hidden;
  width: 301px;
  height: 301px;
  border: 1px solid #bebebe;
}
</style>