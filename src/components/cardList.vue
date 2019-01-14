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
        <a @click="turnProd('left')"
          class="jt-left"></a>
        <a @click="turnProd('right')"
          class="jt-right"></a>
        <div id="new-pro">
          <ul class="newpro fx-row fx-m-start"
            id="newpro">
            <li :style="{transform: 'translateX('+moveProd+'px)'}"
              v-for="(pro, proidx) in productList"
              :key="proidx">
              <a class="pro-img"><img :src="pro.url"
                  :width="pro.width"
                  :height="pro.height" /></a>
              <a>{{pro.name}}</a>
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
let ProIndexNum = 0;
export default {
  data() {
    return {
      // NEW PRODUCTION卡片的数据
      productList: [
        {
          url:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545912257872&di=ea9f09409d802fdcca28041a47b0a469&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8cb1cb13495409237be9a76a9858d109b3de4926.jpg',
          name: 'product1',
          width: 322,
          height: 193
        },
        {
          url:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545912257872&di=ea9f09409d802fdcca28041a47b0a469&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8cb1cb13495409237be9a76a9858d109b3de4926.jpg',
          name: 'product2',
          width: 322,
          height: 193
        },
        {
          url:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545912257872&di=ea9f09409d802fdcca28041a47b0a469&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8cb1cb13495409237be9a76a9858d109b3de4926.jpg',
          name: 'product3',
          width: 322,
          height: 193
        }
      ],
      moveProd: 0
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    // 左右切换产品图片
    turnProd(d) {
      let { width = 322 } = this.productList[0] && this.productList[0].width;
      let length = (this.productList && this.productList.length) || 0;
      if (d === 'left' && ProIndexNum < 0) {
        ProIndexNum += 1;
      } else if (d === 'right' && ProIndexNum > -length + 1) {
        ProIndexNum -= 1;
      }
      this.moveProd = width * ProIndexNum;
    }
  }
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
  flex-shrink: 0;
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