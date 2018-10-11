<template>
  <div>
    <tradeheader @switchTab="switchTab"></tradeheader>
    <banner></banner>
    <notice></notice>
    <div class="center">
      <div class="wd">
        <div v-if="activeTab === 0">
          <cardList></cardList>
          <product></product>
        </div>
        <div v-if="activeTab === 1">
          <div class="column-1">
            <sBannerIcon></sBannerIcon>
            <sBannerText></sBannerText>
          </div>
          <div class="product-main">
            <products></products>
          </div>
        </div>
        <div v-if="activeTab === 2">
          <div class="column-1">
            <sBannerIcon></sBannerIcon>
            <sBannerText></sBannerText>
          </div>
          <div class="product-main">
            <aboutBar></aboutBar>
          </div>
        </div>
        <div v-if="activeTab === 3">
          <div class="column-1">
            <sBannerIcon></sBannerIcon>
            <sBannerText></sBannerText>
          </div>
          <div class="product-main">
            <products></products>
          </div>
        </div>
        <!-- <div v-if="activeTab === 4">
          <div class="column-1">
            <sBannerIcon></sBannerIcon>
            <sBannerText></sBannerText>
          </div>
          <div class="product-main">
            <aboutBar></aboutBar>
          </div>
        </div> -->
        <div v-if="activeTab === 4">
          <div class="column-1">
            <sBannerIcon></sBannerIcon>
            <sBannerText></sBannerText>
          </div>
          <div class="product-main">
            <productDetails></productDetails>
          </div>
        </div>
      </div>
    </div>
    <tradefooter></tradefooter>
  </div>
</template>

<script>
import { pages } from '../../constants';
import tradeheader from '../../components/tradeheader';
import banner from '../../components/banner';
import notice from '../../components/notice';
import tradefooter from '../../components/tradefooter';
import product from '../../components/product';
import cardList from '../../components/cardList';
import sBannerIcon from '../../components/products/sBanner-icon';
import sBannerText from '../../components/products/sBanner-text';
import products from '../../components/products/product-menu';
import aboutBar from '../../components/aboutUs/aboutBar';
import productDetails from '../../components/productDetails';
import { mapGetters, mapMutations } from 'vuex';
export default {
  components: {
    tradeheader,
    banner,
    notice,
    tradefooter,
    product,
    cardList,
    sBannerIcon,
    sBannerText,
    products,
    aboutBar,
    productDetails
  },
  data() {
    return {
      pages
    };
  },
  computed: {
    ...mapGetters('home', ['activeTab'])
  },
  methods: {
    ...mapMutations('home', ['ACTIVETAB']),
    switchTab(params){
      let { index } = params;
      this.ACTIVETAB(index)
      console.log(this.activeTab)
    }
  },
  mounted() {
    console.log(this.activeTab);
  }
};
</script>

<style lang="scss" scoped>
.center {
  clear: both;
  margin-top: 17px;
}
// products
.column-1 {
  margin-top: 17px;
  float: left;
}
.product-main {
  margin-top: 17px;
  float: right;
}
/*==========================================左边===================================================*/
.left {
  float: left;
  width: 225px;
}
// .left .left-top{clear:both;height:34px;line-height:34px;background:url(../../images/left_top.jpg) no-repeat;color:#FFF;font-size:14px;padding-left:25px;font-weight:bold;}
.left .left-con {
  clear: both;
  border: 1px solid #cfcfcf;
  background-color: #f6f6f6;
  line-height: 30px;
}
.left-menu {
  clear: both;
}
.left-menu li {
  clear: both;
}
// .left-menu li a{display:block; overflow:hidden;width:198px;height:30px;background:url(../../images/blue_jt.png) no-repeat 10px center;padding-left:25px;border-bottom:1px solid #E1E1E1;}
// .left-menu li a:hover{color:#015294;font-weight:bold;background:#C4C4C4 url(../../images/blue_jt.png) no-repeat 10px center;}
.left-menu li ul {
  clear: both;
}
.left-menu li ul li {
  clear: both;
}
.left-menu li ul li a {
  background: url(../../images/dot.png) no-repeat 10px center;
  border-bottom: 1px dotted #e1e1e1;
}
.left-menu li ul li a:hover {
  color: #015294;
  font-weight: bold;
  background: url(../../images/dot.png) no-repeat 10px center;
}

// #sel01{color:#015294;font-weight:bold;background:#C4C4C4 url(../../images/blue_jt.png) no-repeat 10px center;}
#sel02 {
  color: #015294;
  font-weight: bold;
  background: url(../../images/dot.png) no-repeat 10px center;
}

.left-contact {
  padding: 10px;
  line-height: 25px;
}
/*==========================================右边==========================================*/
.right {
  float: right;
  width: 761px;
  border: 1px solid #cfcfcf;
}
// .right .right-top{clear:both;height:33px;background:url(../../images/right_top.jpg) repeat-x;line-height:33px;}
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
/***********************新闻列表***********************************/
.newslist li {
  height: 35px;
  line-height: 35px;
  border-bottom: 1px dashed #cccccc;
}
.newslist li a {
  display: block;
  height: 35px;
  line-height: 35px;
  width: 600px;
  float: left;
  padding-left: 10px;
}
.newslist li span {
  display: block;
  height: 35px;
  line-height: 35px;
  width: 80px;
  float: right;
}
/***************新闻详细*********************************/
.new_title {
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #f00;
}
.new_share {
  height: 30px;
  line-height: 30px;
  clear: both;
  background-color: #f4f4f4;
  padding-left: 10px;
  margin-bttom: 10px;
  border: 1px dashed #ccc;
}
.new_share .publish {
  text-align: center;
}
.new_title1 {
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: #5e8a00;
}
.news_img {
  height: 225px;
  clear: both;
  text-align: center;
}
.news_img img {
  border: 1px solid #ccc;
}

// .prev_n{line-height:30px;padding-left:20px;background-color:#f4f4f4;margin-top:10px;height:60px;border:1px dashed #CCC;}
// .prev_n .nleft{width:600px;float:left;}
// .prev_n .goback{width:50px;float:right;background:url(../../images/blue.png) no-repeat left center;padding-left:20px;margin-top:13px;}
/*********************注册会员*************************/
.feedback {
  line-height: 35px;
  width: 95%;
  margin-left: 20px;
  border-left: 1px dashed #ccc;
  border-top: 1px dashed #ccc;
}
.feedback td {
  border-bottom: 1px dashed #ccc;
  padding-left: 10px;
  border-right: 1px dashed #ccc;
}
.feedback .tdleft {
  text-align: right;
  background-color: #f5f5f5;
}

.feedback_1 {
  width: 95%;
  border: 1px dashed #ccc;
  background-color: #f5f5f5;
  margin-top: 30px;
  margin-left: 20px;
  line-height: 25px;
  padding: 10px;
}
/*====================资质证书=========================*/
.hd_list_1 {
  width: 770px;
}
.hd_list_1 li {
  float: left;
  width: 156px;
  height: 243px;
  line-height: 25px;
  text-align: center;
  margin-top: 10px;
  margin-left: 10px;
}
.hd_list_1 li img {
  width: 150px;
  height: 213px;
}
.hd_list_1 li .cer_img {
  clear: both;
  border: 1px solid #dbdbdb;
  display: block;
  overflow: hidden;
  width: 150px;
  height: 213px;
  padding: 2px;
  background-color: #fff;
}
/*====================资质证书=========================*/
.hd_list {
  width: 770px;
}
.hd_list_1 li {
  float: left;
  width: 156px;
  height: 243px;
  line-height: 25px;
  margin-right: 16px;
  text-align: center;
  margin-top: 10px;
  margin-left: 12px;
}
.hd_list li {
  float: left;
  width: 166px;
  height: 153px;
  line-height: 25px;
  margin-right: 10px;
  text-align: center;
  margin-top: 10px;
  margin-left: 8px;
}
.hd_list li img {
  width: 160px;
  height: 119px;
}
.hd_list li .img {
  clear: both;
  border: 1px solid #dbdbdb;
  display: block;
  overflow: hidden;
  width: 160px;
  height: 119px;
  padding: 2px;
  background-color: #fff;
}
</style>