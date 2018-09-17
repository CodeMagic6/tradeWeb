<!--  -->
<template>
  <div>
    <div class="left">
      <div class="left-top">Products</div>
      <div class="left-con">
        <ul class="left-menu">
          <li>
            <a href="javascript:;"
              id=""
              title="18650  Lithium Battery Power Bank">18650 Lithium Battery Power Bank</a>
          </li>
          <li>
            <a href="javascript:;"
              id=""
              title="Li-Polymer Battery">Li-Polymer Battery</a>
          </li>
          <li>
            <a href="javascript:;"
              id=""
              title="Solar Power Bank">Solar Power Bank</a>
          </li>
        </ul>
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

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.left {
  float: left;
  width: 225px;
}
.left .left-top {
  clear: both;
  height: 34px;
  line-height: 34px;
  background: url(../../images/left_top.jpg) no-repeat;
  color: #fff;
  font-size: 14px;
  padding-left: 25px;
  font-weight: bold;
}
.left .left-con {
  clear: both;
  border: 1px solid #cfcfcf;
  background-color: #f6f6f6;
  line-height: 30px;
  margin-bottom: 10px;
}
.left-menu {
  clear: both;
}
.left-menu li {
  clear: both;
}
.left-menu li a {
  display: block;
  overflow: hidden;
  width: 198px;
  height: 30px;
  background: url(../../images/blue_jt.png) no-repeat 10px center;
  padding-left: 25px;
  border-bottom: 1px solid #e1e1e1;
}
.left-menu li a:hover {
  color: #015294;
  font-weight: bold;
  background: #c4c4c4 url(../../images/blue_jt.png) no-repeat 10px center;
}
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
</style>