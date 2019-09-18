<template>
  <div class="hWrap">
    <div class="column-1">
      <sBannerIcon></sBannerIcon>
      <sBannerText></sBannerText>
    </div>
    <div class="product-main">
      <productsMenu></productsMenu>
    </div>
  </div>
</template>

<script>
import sBannerIcon from '../components/products/sBanner-icon';
import sBannerText from '../components/products/sBanner-text';
import productsMenu from '../components/products/product-menu';
export default {
  data() {
    return {};
  },
  components: {
    sBannerIcon,
    sBannerText,
    productsMenu
  }
};
</script>

<style scoped>
.hWrap{
  display: flex;
  justify-content: space-between;
}
</style>
