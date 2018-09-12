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
  .bannerwrap{  
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
</style>