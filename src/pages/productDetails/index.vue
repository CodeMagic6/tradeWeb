<template>
  <div>
    <tradeheader></tradeheader>
    <div class="center wd">
      <div class="column-1">
        <sBannerIcon></sBannerIcon>
        <sBannerText></sBannerText>
      </div>
      <div class="product-main">
        <productsDetails></productsDetails>
      </div>
    </div>
  </div>
</template>

<script>
import tradeheader from '../../components/baseComponent/tradeheader';
import sBannerIcon from '../../components/products/sBanner-icon';
import sBannerText from '../../components/products/sBanner-text';
import productsDetails from '../../components/baseComponent/productDetails';
export default {
  components: {
    tradeheader,
    sBannerIcon,
    sBannerText,
    productsDetails
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