<!--  -->
<template>
  <div class="banner">
    <div class="show">
      <div class="bannerwrap">
        <img v-for="(im, imidx) in imgs"
          :style="{transform: 'translateX('+ (-100 * activeIndex) +'%)'}"
          :src="im"
          :key="imidx">
      </div>
      <div class="bannerDot">
        <div v-for="(im, imidx) in imgs"
          :key="imidx"
          @click="changeBanner(imidx)"
          class="dot"
          :class="{active: activeIndex === imidx}"></div>
      </div>
    </div>
  </div>
</template>

<script>
// 广告图片的本地路径
import banner1 from '../images/userfiles/ad/banner1.jpg';
import banner2 from '../images/userfiles/ad/banner2.jpg';
import banner3 from '../images/userfiles/ad/banner3.jpg';
import banner4 from '../images/userfiles/ad/banner4.jpg';
export default {
  data() {
    return {
      activeIndex: 0,
      imgs: [banner1, banner2, banner3, banner4]
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    changeBanner(index) {
      this.activeIndex = index;
    }
  }
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