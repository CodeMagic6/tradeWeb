<template>
  <div>
    <tradeheader></tradeheader>
    <div class="center wd">
      <div class="column-1">
        <sBannerIcon></sBannerIcon>
        <sBannerText></sBannerText>
      </div>
      <div class="product-main">
        <products></products>
      </div>
    </div>
  </div>
</template>

<script>
import tradeheader from '../../components/tradeheader';
import sBannerIcon from '../../components/products/sBanner-icon';
import sBannerText from '../../components/products/sBanner-text';
import products from '../../components/products/product-menu';
export default {
  components: {
    tradeheader,
    sBannerIcon,
    sBannerText,
    products
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.column-1 {
  margin-top: 17px;
  float: left;
}
.product-main {
  margin-top: 17px;
  float: right;
}
</style>