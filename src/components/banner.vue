<!--  -->
<template>
  <div class="banner">
    <div class="show">
      <div class="bannerwrap">
        <a href="javascript:;"><img src="../images/userfiles/ad/banner1.jpg"
            alt="banner1"></a>
        <a href="javascript:;"><img src="../images/userfiles/ad/banner2.jpg"
            alt=""></a>
        <a href="javascript:;"><img src="../images/userfiles/ad/banner3.jpg"
            alt=""></a>
        <a href="javascript:;"><img src="../images/userfiles/ad/banner4.jpg"
            alt=""></a>
      </div>
      <div class="bannerDot">
        <div class="dot active"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
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
.banner {
  clear: both;
  height: 426px;
  margin-top: 1px;
  position: relative;
  .bannerwrap {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
}
.nybanner {
  clear: both;
  height: 230px;
  margin-top: 1px;
}
.bannerDot {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  padding: 0;
  .dot {
    width: 27px;
    height: 5px;
    line-height: 14px;
    font-size: 12px;
    background: #cacaca;
    border: 0px solid #fff;
    color: #5a5a5a;
    text-align: center;
    margin-right: 10px;
    font-family: Verdana;
    float: left;
    cursor: pointer;
    -webkit-text-size-adjust: none;
  }
  .dot.active {
    background: #005ba6;
    border: 0px solid #fff;
    color: #fff;
    cursor: default;
  }
}
</style>