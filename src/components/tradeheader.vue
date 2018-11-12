<template>
  <div>
    <div class="head">
      <div class="wd">
        <div class="icon">
          <img style="width: 89px;height: 80px;" src="../images/webimages/logo/ico.jpg">
        </div>
        <div class="banben">
          <div class="es">Español</div>
          <div class="pu">Português</div>
          <div class="cn">BEIJING</div>
          <div class="ko">KOREA</div>
          <div class="jp">TOKYO</div>
          <div class="si">SINGAPORE</div>
          <div class="fra">FRANKFURT</div>
          <div class="en">UAE</div>
          <div class="am">NEWYORK</div>
        </div>
        <div class="phone">
          <img src="../images/phone.png" alt="">
        </div>
        </div>
      </div>
      <div class="menu">
        <div class="wd">
          <ul class="menu-con">
            <li v-for="(name, index) in navName"
              @click="$emit('switchTab', {name, index})"
              :key="index">
              {{name}}
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
import { navName } from '../constants';
import WebSettings from '../settings.js';
export default {
  data() {
    return {
      navName,
      WebSettings,
      baseUrl: '../'
    };
  }
};
</script>

<style lang="scss" scoped>
/*=========================头部==================================*/
.head {
  clear: both;
  height: 129px;
  // background: url(../images/head.jpg) no-repeat center top;
}
.wd {
  position: relative;
  width: 1000px;
  margin: 0px auto;
  clear: both;
  .icon{
    position: absolute;
    left: 160px;
    top: 20px;
  }
}
.head .banben {
  clear: both;
  height: 20px;
  line-height: 20px;
  padding-top: 14px;
}
.head .banben div {
  display: block;
  overflow: hidden;
  padding-left: 17px;
  float: right;
  margin-left: 5px;
}
.head .banben .cn {
  background: url(../images/cn.jpg) no-repeat left center;
}
.head .banben .ko {
  background: url(../images/hanguo.jpg) no-repeat left center;
}
.head .banben .jp {
  background: url(../images/riben.jpg) no-repeat left center;
}
.head .banben .si {
  background: url(../images/xinjiapo.jpg) no-repeat left center;
}
.head .banben .fra {
  background: url(../images/faguo.jpg) no-repeat left center;
}
.head .banben .en {
  background: url(../images/yingguo.jpg) no-repeat left center;
}
.head .banben .am {
  background: url(../images/meiguo.jpg) no-repeat left center;
}
.head .banben .es {
  background: url(../images/es.jpg) no-repeat left center;
}
.head .banben .pu {
  background: url(../images/pu.jpg) no-repeat left center;
}
.head .phone {
  clear: both;
  text-align: right;
  margin-top: 20px;
  height: 50px;
}
/*======================================导航===================================*/
.menu {
  clear: both;
  height: 44px;
  line-height: 44px;
  background: url(../images/m_bg.jpg) repeat-x;
}
.menu .menu-con {
  float: left;
  height: 44px;
  line-height: 44px;
  width: 765px;
}
.menu .menu-con li {
  float: left;
  width: 125px;
  height: 44px;
  text-align: center;
  color: #fff;
  font-size: 18px;
}
.menu .menu-con .m-line {
  width: 2px;
  height: 44px;
  background: url(../images/m_line.jpg) no-repeat left center;
}
.menu .menu-con li a {
  color: #fff;
  width: 125px;
  height: 44px;
}
.menu .menu-con li a:hover {
  background: url(../images/m_on_bg.jpg) repeat-x;
  display: block;
  overflow: hidden;
}
.menu .menu-con li #nav_sel {
  background: url(../images/m_on_bg.jpg) repeat-x;
  display: block;
  overflow: hidden;
}
.menu .search {
  float: right;
  width: 230px;
  margin-top: 6px;
}
.menu .search .search-txt {
  float: right;
  width: 171px;
  height: 29px;
  background: url(../images/search_txt.jpg) no-repeat;
  border: 0px;
  line-height: 29px;
  color: #868686;
}
.menu .search .search-btn {
  float: right;
  width: 43px;
  height: 29px;
  background: url(../images/search_btn.jpg) no-repeat;
  border: 0px;
}
</style>