<template>
  <div class="pwrap">
    <div class="column-1">
      <sBannerIcon></sBannerIcon>
      <sBannerText></sBannerText>
    </div>
    <div class="product-main">
      <productsMenu @gotoPd="gotoPd"></productsMenu>
    </div>
  </div>
</template>

<script>
import sBannerIcon from '../components/products/sBanner-icon'
import sBannerText from '../components/products/sBanner-text'
import productsMenu from '../components/products/product-menu'
export default {
  data() {
    return {};
  },
  components: {
    sBannerIcon,
    sBannerText,
    productsMenu
  },
  methods: {
    gotoPd(id){
      console.log('index'+id);
    }
  }
};
</script>

<style scoped lang="scss">
.pwrap{
  display: flex;
  justify-content: space-between
}
</style>
