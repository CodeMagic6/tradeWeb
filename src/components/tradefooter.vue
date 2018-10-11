<!--  -->
<template>
  <!--footer start-->
  <div class="footer">
    <div class="wd">
      <!--footer top start-->
      <div class="footer-top">
        <!--botnav start-->
        <div class="botnav">
          <table>
            <tr class="tr-title">
              <td>About Us</td>
              <td>Products</td>
              <td>Contact Us</td>
            </tr>
            <tr>
              <td style="width:20%">
                <ul>
                  <li v-for="(item, index) in aboutUs"
                    :key="index">
                    <a>{{item}}</a>
                  </li>
                </ul>
              </td>
              <td style="width:25%">
                <ul>
                  <li v-for="(item, index) in Products">
                    <a>{{item}}</a>
                  </li>
                </ul>
              </td>
              <td style="padding-left:15px; width:40%;line-height:25px;">
                <p>Contacter: Erin Lee
                  <br /> Title: Sales Maneger
                  <br /> Tel: + 86 755 29606763
                  <br /> Fax: + 86 755 29604250
                  <br /> Skype: Erin.limeie
                  <br /> Email:judith@szdqdz.com
                  <br /> Company: ShenZhen De Qiang Electronics Co., Ltd.
                  <br /> Shenzhen, Guang Dong Province, China 518104
                  <br /> &nbsp;
                </p>
              </td>
            </tr>
          </table>
        </div>
        <!--botnav end-->
        <!--erwei start-->
        <div class="erwei"><img src="../images/erwei.jpg"
            width="116"
            height="116"
            alt="" /></div>
        <!--erwei end-->
      </div>
      <!--footer top end-->
      <!--bottom start-->
      <div class="bottom">
        <div class="bottom-left">
          <a>Privacy Policy</a> |
          <a>Legal Notices</a> |
          <a>Site Map</a>
          <br /> Copyright &copy; 2015 Shenzhen De Qiang Electronics Co. Ltd.
        </div>
      </div>
      <!--bottom end-->
    </div>
  </div>
  <!--footer end-->
</template>

<script>
export default {
  data() {
    return {
      aboutUs: [
        'Company Profile',
        'Corporate Culture',
        'Honors',
        'Office environment'
      ],
      Products: [
        '18650 Lithium Battery Power Bank',
        'Li-Polymer Battery',
        'Solar Power Bank'
      ]
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.footer {
  clear: both;
  margin-top: 10px;
  background: #8e8e8e url(../images/footer_bg.jpg) repeat-x;
  font-family: Times New Roman;
}
.footer-top {
  margin-top: 20px;
}
.botnav {
  float: left;
  width: 872px;
  color: #fff;
}
.botnav table {
  width: 100%;
}
.botnav .tr-title {
  height: 30px;
  line-height: 30px;
  font-size: 18px;
}
.botnav td {
  vertical-align: top;
}
.botnav .tr-title td {
  background: url(../images/gray_fk.png) no-repeat left center;
  padding-left: 15px;
}
.botnav ul {
  clear: both;
}
.botnav ul li {
  height: 30px;
  line-height: 30px;
  background: url(../images/dot.png) no-repeat left center;
  padding-left: 15px;
}
.botnav ul li a {
  color: #fff;
}

.erwei {
  float: right;
  width: 116px;
}

.live {
  clear: both;
  height: 34px;
  padding-bottom: 13px;
  border-bottom: 1px solid #6c6c6c;
}

.bottom {
  clear: both;
  padding-top: 14px;
  border-top: 1px solid #b1b1b1;
  color: #fff;
  padding-bottom: 10px;
}
.bottom .bottom-left {
  float: left;
  width: 665px;
}
.bottom .bottom-left a {
  color: #fff;
  font-weight: bold;
}
.bottom .bottom-right {
  float: right;
  width: 250px;
  margin-top: 5px;
  text-align: right;
}
</style>