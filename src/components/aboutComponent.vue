<template>
  <div class="awrap">
    <div class="column-1">
      <sBannerIcon></sBannerIcon>
      <sBannerText></sBannerText>
    </div>
    <div class="product-main">
      <aboutBar></aboutBar>
    </div>
  </div>
</template>

<script>
import sBannerIcon from '../components/products/sBanner-icon';
import sBannerText from '../components/products/sBanner-text';
import aboutBar from '../components/baseComponent/aboutBar';
export default {
  data() {
    return {};
  },
  components: {
    sBannerIcon,
    sBannerText,
    aboutBar
  }
};
</script>

<style scoped lang="scss">
.awrap{
  display: flex;
  justify-content: space-between;
}
</style>
