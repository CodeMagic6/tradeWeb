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
            <a title="DQDZ Ultr Slim ’PowerBank’ External Extended High Capacity (2500 mAh) Portable Spare Battery Power Pack "
              class="pro-img"><img src="../../images/userfiles/product/list/-E9-BB-91-E8-89-B2-E6-AD-A3-E5-8F-8D.jpg"
                width="200"
                height="200"/></a>
            <a title="DQDZ Ultr Slim ’PowerBank’ External Extended High Capacity (2500 mAh) Portable Spare Battery Power Pack ">DQDZ Ultr Slim ’Pow...</a>
          </li>
        </ul>
        <!-- 分页 开始 -->
        <div class="page"
          style="text-align:center;">
          <a class="no_pre"
            title="Previous">Prev</a>
          <a class="current"
            title="Go1Page">1</a>
          <a id="p2"
            href=""
            title="Go2Page">2</a>
          <a href=""
            title="Next">Next</a>
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
    initPageNum(){

    },
    initArr(){

    },
    gotoPage(){

    },
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
}
.page a {
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
.page a:hover {
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
  border: 1px solid #e1e1e1;
}
.prolist li .pro-img:hover {
  border-color: #69aed4;
}
</style>