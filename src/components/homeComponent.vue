<template>
  <div>
    <cardList @gotoAboutUs="gotoAboutUs"
      @gotoProduct="gotoProduct"
      @gotoContact="gotoContact"></cardList>
    <product></product>
  </div>
</template>

<script>
import cardList from '../components/baseComponent/cardList';
import product from '../components/baseComponent/product';
export default {
  data() {
    return {};
  },
  components: {
    cardList,
    product
  },
  methods: {
    gotoAboutUs() {
      this.$emit('gotoAboutUs');
    },
    gotoProduct() {
      this.$emit('gotoProduct');
    },
    gotoContact() {
      this.$emit('gotoContact');
    }
  }
};
</script>

<style scoped>
</style>
