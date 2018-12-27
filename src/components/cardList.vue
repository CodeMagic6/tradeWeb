<!--  -->
<template>
  <div>
    <!--about start-->
    <div @click="$emit('gotoAboutUs')"
      class="about box">
      <div class="box-title">
        <h1>ABOUT US</h1>
        <a href=""
          class="more"></a>
      </div>
      <div class="box-img">
        <img src="../images/about.jpg"
          width="287"
          height="106">
      </div>
      <div class="box-con">" Company intorduction: Shenzhen De Qiang Electronics Co., Ltd. is located in Fu Yong Bao An distict, very close to Shenzhen airport, the economic center in China.The company are professional to produce... the power bank device for smart phone.Our main "
      </div>
    </div>
    <!--about end-->
    <!--new product start-->
    <div class="new-pro">
      <div @click="$emit('gotoProduct')"
        class="new-pro-title">
        <h1>NEW PRODUCTS</h1>
        <a class="more"></a>
      </div>
      <div class="new-pro-con">
        <a class="jt-left"></a>
        <a class="jt-right"></a>
        <div id="new-pro">
          <ul class="newpro"
            id="newpro">
            <li>
              <a class="pro-img"><img src="../images/userfiles/ad/pro1.jpg"
                  width="320"
                  height="193" /></a>
              <a>new product1</a>
            </li>
            <li>
              <a class="pro-img"><img src="../images/userfiles/ad/pro1.jpg"
                  width="320"
                  height="193" /></a>
              <a>new product2</a>
            </li>
            <li>
              <a class="pro-img"><img src="../images/userfiles/ad/pro1.jpg"
                  width="320"
                  height="193" /></a>
              <a>new product3</a>
            </li>

          </ul>
        </div>
      </div>
    </div>
    <!--new product end-->
    <!--about start-->
    <div @click="$emit('gotoContact')"
      class="contact box">
      <div class="box-title">
        <h1>CONTACT US</h1>
        <a class="more"></a>
      </div>
      <div class="box-img"><img src="../images/contact.jpg"
          width="287"
          height="106" /></div>
      <div class="box-con">
        <table style="line-height: 18px; width: 100%">
          <tbody>
            <tr>
              <td><img width="14"
                  height="13"
                  src="../images/userfiles/tel.jpg" /></td>
              <td>Tel:0086-755-29606763</td>
            </tr>
            <tr>
              <td><img width="14"
                  height="13"
                  src="../images/userfiles/tel1.jpg" /></td>
              <td>Fax:0086-755-29604250</td>
            </tr>
            <tr>
              <td><img width="14"
                  height="13"
                  src="../images/userfiles/email.jpg" /></td>
              <td>E-mail:
                <a href="mailto:judith@szdqdz.com">judith@szdqdz.com</a>
              </td>
            </tr>
            <tr>
              <td style="vertical-align: top"><img width="14"
                  height="13"
                  src="../images/userfiles/add.jpg" /></td>
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
.box {
  width: 287px;
  height: 271px;
}
.box .box-title {
  clear: both;
  height: 34px;
  background: url(../images/btitle_bg.jpg) no-repeat;
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
  background: url(../images/more.jpg) no-repeat;
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
  background: url(../images/btitle_bg1.jpg) no-repeat;
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
  background: url(../images/jt_left.jpg) no-repeat left center;
  float: left;
  margin-left: 6px;
}
.new-pro .jt-right {
  width: 25px;
  height: 225px;
  background: url(../images/jt_right.jpg) no-repeat left center;
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
</style>