<!--  -->
<template>
  <!--product start-->
  <div class="product wd">
    <div class="product-title">
      <h1>PRODUCTS</h1>
      <a href="/3/"
        title=""
        class="more1"></a>
    </div>
    <div class="product-con">
      <a href="javascript:void(0)"
        title=""
        class="jt-left1"></a>
      <a href="javascript:void(0)"
        title=""
        class="jt-right1"></a>
      <div id="pro-con">
        <ul class="pro-list fx-row fx-m-start"
          id="pro-list">
          <li class="fx-no-shrink" v-for="n in 6">
            <a href="/39/42.html"
              title="solar power bank"
              class="pro-img"><img src="../images/userfiles/product/solor5LED/00.jpg"
                width="301"
                height="301"
                alt="solar power bank" /></a>
            <a href="/39/42.html"
              title="solar power bank">solar power bank</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!--product end-->
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.product {
  clear: both;
}
.product .product-title {
  height: 37px;
  line-height: 35px;
  background: url(../images/p_line.jpg) no-repeat left bottom;
}
.product .product-title h1 {
  font-size: 14px;
  color: #005da0;
  background: url(../images/bfk.jpg) no-repeat left center;
  padding-left: 15px;
  float: left;
}
.more1 {
  float: right;
  width: 38px;
  height: 14px;
  background: url(../images/more1.jpg) no-repeat;
  margin-top: 11px;
  margin-right: 6px;
}

.product-con {
  clear: both;
  margin-top: 20px;
}
.product-con .jt-left1 {
  width: 25px;
  height: 338px;
  background: url(../images/jt_left1.jpg) no-repeat left center;
  float: left;
}
.product-con .jt-right1 {
  width: 25px;
  height: 338px;
  background: url(../images/jt_right1.jpg) no-repeat left center;
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