<!--  -->
<template>
  <div>
    <div class="right">
      <div class="right-top">
        <h1>Products</h1>
      </div>
      <div class="right-con">
        <ul class="prolist">
          <li v-for="n in 9"
            :key="n">
            <div class="pro-img"><img src="../../images/userfiles/product/list/-E9-BB-91-E8-89-B2-E6-AD-A3-E5-8F-8D.jpg"/></div>
            <div>DQDZ Ultr Slim ’Pow...</div>
          </li>
        </ul>
        <!-- 分页 开始 -->
        <div class="page">
          <div class="wrap">
            <div class="no_pre">Prev</div>
            <div class="current">1</div>
            <div id="p2">2</div>
            <div>Next</div>
          </div>
        </div>
        <!-- 分页 结束 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {
    initPageNum() {},
    initArr() {},
    gotoPage() {}
  },

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.page {
  width: 100%;
  text-align: center;
  clear: both;
  height: 32px;
  padding: 20px 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.page .wrap {
   display: flex;
}
.page div div {
  justify-content: flex-start;
  align-content: center;
  padding: 4px 9px;
  border: 1px solid #ccc;
  color: #505050;
  margin: 0 1px;
  font-size: 13px;
  text-align: center;
}
.page .more {
  border: 0;
}
.page div:hover {
  background: #fff6db;
  border-color: #df5700;
  color: #ff6400;
}
.page .pre {
  font-weight: 600;
  color: #ff6400;
}
.page .next {
  font-weight: 600;
  color: #ff6400;
}
.page .pre:hover {
  background: #fff6db;
  border-color: #df5700;
  color: #ff6400;
}
.page .next:hover {
  background: #fff6db;
  border-color: #df5700;
  color: #ff6400;
}
.page .more:hover {
  background: none;
  color: #505050;
}
.page .current {
  background: #666;
  border-color: #ccc;
  color: #fff;
  font-weight: 700;
}
.page .current:hover {
  background: #fff6db;
  border-color: #df5700;
  color: #ff6400;
  font-weight: 700;
}
.page .no_pre {
  color: #ccc;
  font-weight: 600;
}
.page .no_pre:hover {
  color: #ccc;
  background: none;
  border-color: #ccc;
}
.page .no_next {
  color: #ccc;
  font-weight: 600;
}
.page .no_next:hover {
  color: #ccc;
  background: none;
  border-color: #ccc;
}

.right {
  float: right;
  width: 761px;
  border: 1px solid #cfcfcf;
}
.right .right-top {
  clear: both;
  height: 33px;
  background: url(../../images/right_top.jpg) repeat-x;
  line-height: 33px;
}
.right .right-top h1 {
  float: left;
  width: 300px;
  margin-left: 10px;
  font-size: 14px;
  color: #015294;
}
.right .right-top span {
  float: right;
  text-align: right;
  width: 303px;
  margin-right: 10px;
}
.right .right-con {
  clear: both;
  padding: 10px;
}

.prolist {
  clear: both;
  width: 781px;
}
.prolist li {
  width: 202px;
  height: 232px;
  line-height: 30px;
  text-align: center;
  float: left;
  margin-right: 45px;
  margin-top: 10px;
  margin-left: 10px;
}
.prolist li .pro-img {
  display: block;
  overflow: hidden;
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  border: 1px solid #e1e1e1;
}
.prolist li .pro-img img {
  width: 200px;
  height: 200px;
}
.prolist li .pro-img:hover {
  border-color: #69aed4;
}
</style>