<template>
  <div>
    <tradeheader></tradeheader>
    <div class="banner">
      <div class="show">

      </div>
    </div>
    <div class="notice">
      <div class="wd">
        <div class="no-title">NEWS:</div>
        <div>
          <div>
            <div>
              <ul id="notice-list">
                <li>
                  <a href=""></a>
                  <font color="#999999">
                    <i>2015-03-28</i>
                  </font>
                </li>
                <li>
                  <a href=""></a>
                  <font color="#999999">
                    <i>2015-03-28</i>
                  </font>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="wd">
        <!--about start-->
        <div class="about box">
          <div class="box-title">
            <h1>ABOUT US</h1>
            <a href=""
              title="more"
              class="more"></a>
          </div>
          <div class="box-img">
            <img src="../../images/about.jpg"
              width="287"
              height="106"
              alt>
          </div>
          <div class="box-con">" Company intorduction: Shenzhen De Qiang Electronics Co., Ltd. is located in Fu Yong Bao An distict, very close to Shenzhen airport, the economic center in China.The company are professional to produce... the power bank device for smart phone.Our main "
          </div>
        </div>
        <!--about end-->
        <!--new product start-->
        <div class="new-pro">
          <div class="new-pro-title">
            <h1>NEW PRODUCTS</h1>
            <a href="/3/"
              title="more"
              class="more"></a>
          </div>
          <div class="new-pro-con">
            <a href="javascript:void(0)"
              title=""
              class="jt-left"></a>
            <a href="javascript:void(0)"
              title=""
              class="jt-right"></a>
            <div id="new-pro">
              <ul class="newpro"
                id="newpro">
                <li>
                  <a href="#"
                    title="new product1"
                    class="pro-img"><img src="../../images/userfiles/ad/pro1.jpg"
                      width="320"
                      height="193"
                      alt="new product1" /></a>
                  <a href="#"
                    title="new product1">new product1</a>
                </li>
                <li>
                  <a href="#"
                    title="new product2"
                    class="pro-img"><img src="../../images/userfiles/ad/pro1.jpg"
                      width="320"
                      height="193"
                      alt="new product2" /></a>
                  <a href="#"
                    title="new product2">new product2</a>
                </li>
                <li>
                  <a href="#"
                    title="new product3"
                    class="pro-img"><img src="../../images/userfiles/ad/pro1.jpg"
                      width="320"
                      height="193"
                      alt="new product3" /></a>
                  <a href="#"
                    title="new product3">new product3</a>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <!--new product end-->
        <!--about start-->
        <div class="contact box">
          <div class="box-title">
            <h1>CONTACT US</h1>
            <a href="/267/"
              title="more"
              class="more"></a>
          </div>
          <div class="box-img"><img src="../../images/contact.jpg"
              width="287"
              height="106"
              alt="" /></div>
          <div class="box-con">
            <table style="line-height: 18px; width: 100%">
              <tbody>
                <tr>
                  <td><img alt=""
                      width="14"
                      height="13"
                      src="/web/userfiles/tel.jpg" /></td>
                  <td>Tel:0086-755-29606763</td>
                </tr>
                <tr>
                  <td><img alt=""
                      width="14"
                      height="13"
                      src="/web/userfiles/tel1.jpg" /></td>
                  <td>Fax:0086-755-29604250</td>
                </tr>
                <tr>
                  <td><img alt=""
                      width="14"
                      height="13"
                      src="/web/userfiles/email.jpg" /></td>
                  <td>E-mail:
                    <a href="mailto:judith@szdqdz.com">judith@szdqdz.com</a>
                  </td>
                </tr>
                <tr>
                  <td style="vertical-align: top"><img alt=""
                      width="14"
                      height="13"
                      src="/web/userfiles/add.jpg" /></td>
                  <td>Add:
                    <span style="font-size: 12px">
                      <span style="color: black">2F, Block A, Shang Fang Industrial Park,&nbsp;
                        <span style="background: white">Xin Fa Industrial Zone,&nbsp;</span>
                      </span>
                      <span style="background: white; color: black">Xin Qiao Community,Sha Jing Street,&nbsp;Bao&rsquo;AN District, Shenzhen, Guang Dong Province, China 518104</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!--about end-->
      </div>
    </div>
  </div>
</template>

<script>
import tradeheader from '../../components/tradeheader';
export default {
  components: {
    tradeheader
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
/*=======================================banner===================================*/
.banner {
  clear: both;
  height: 426px;
  margin-top: 1px;
}
.nybanner {
  clear: both;
  height: 230px;
  margin-top: 1px;
}

.notice {
  clear: both;
  height: 44px;
  background: url(../../images/n_bg.jpg) repeat-x;
}
.notice .no-title {
  float: left;
  width: 70px;
  background: url(../../images/laba.jpg) no-repeat left center;
  color: #005194;
  font-size: 14px;
  height: 44px;
  padding-left: 30px;
  line-height: 44px;
  font-weight: bold;
}
.notice .wd div {
  float: left;
  width: 570px;
  height: 44px;
}
.notice .wd div ul {
  clear: both;
}
.notice .wd div ul li {
  clear: both;
  height: 44px;
  line-height: 44px;
}

.center {
  clear: both;
  margin-top: 17px;
}

.box {
  width: 287px;
  height: 271px;
}
.box .box-title {
  clear: both;
  height: 34px;
  background: url(../../images/btitle_bg.jpg) no-repeat;
  line-height: 34px;
}
.box .box-title h1 {
  color: #fff;
  font-size: 14px;
  padding-left: 25px;
  float: left;
}
.more {
  float: right;
  width: 33px;
  height: 13px;
  background: url(../../images/more.jpg) no-repeat;
  margin-top: 9px;
  margin-right: 6px;
}
.box .box-img {
  clear: both;
  height: 106px;
}
.box .box-con {
  clear: both;
  padding: 5px 10px;
  line-height: 18px;
  border: 1px solid #cfcfcf;
  border-top: 0px;
  height: 120px;
}

.about {
  float: left;
}
.contact {
  float: right;
}

.new-pro {
  float: left;
  width: 404px;
  margin-left: 10px;
}
.new-pro .new-pro-title {
  height: 34px;
  background: url(../../images/btitle_bg1.jpg) no-repeat;
  line-height: 34px;
}
.new-pro .new-pro-title h1 {
  color: #fff;
  font-size: 14px;
  padding-left: 25px;
  float: left;
}
.new-pro .new-pro-con {
  clear: both;
  height: 236px;
  border: 1px solid #cfcfcf;
  border-top: 0px;
}
.new-pro .jt-left {
  width: 25px;
  height: 225px;
  background: url(../../images/jt_left.jpg) no-repeat left center;
  float: left;
  margin-left: 6px;
}
.new-pro .jt-right {
  width: 25px;
  height: 225px;
  background: url(../../images/jt_right.jpg) no-repeat left center;
  float: right;
  margin-right: 6px;
}

#new-pro {
  float: left;
  width: 322px;
  height: 225px;
  margin-left: 7px;
  margin-top: 9px;
}
.newpro {
  clear: both;
}
.newpro li {
  float: left;
  width: 322px;
  height: 225px;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
}
.newpro li .pro-img {
  display: block;
  overflow: hidden;
  width: 320px;
  height: 193px;
  border: 1px solid #bebebe;
}

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
  width: 25px;
  height: 338px;
  background: url(../../images/jt_left1.jpg) no-repeat left center;
  float: left;
}
.product-con .jt-right1 {
  width: 25px;
  height: 338px;
  background: url(../../images/jt_right1.jpg) no-repeat left center;
  float: right;
}

#pro-con{float:left;width:944px;height:338px;}
.pro-list{clear:both;}
.pro-list li{float:left;width:303px;height:338px; text-align:center;line-height:30px;margin-right:15px;font-size:12px;}
.pro-list li .pro-img{display:block; overflow:hidden;width:301px;height:301px;border:1px solid #BEBEBE;}
</style>