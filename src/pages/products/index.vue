<template>
  <div>
    <tradeheader></tradeheader>
    <sBannerIcon></sBannerIcon>
    <sBannerText></sBannerText>
    <products></products>
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

</style>