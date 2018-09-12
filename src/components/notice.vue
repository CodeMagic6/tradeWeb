<!--  -->
<template>
  <div class="notice">
    <div class="wd">
      <div class="no-title">NEWS:</div>
      <div>
        <div>
          <div>
            <ul id="notice-list">
              <li>
                <a href=""></a>
                <font color="#999999">
                  <i>2015-03-28</i>
                </font>
              </li>
              <li>
                <a href=""></a>
                <font color="#999999">
                  <i>2015-03-28</i>
                </font>
              </li>
            </ul>
          </div>
        </div>
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
.notice {
  clear: both;
  height: 44px;
  background: url(../images/n_bg.jpg) repeat-x;
}
.notice .no-title {
  float: left;
  width: 70px;
  background: url(../images/laba.jpg) no-repeat left center;
  color: #005194;
  font-size: 14px;
  height: 44px;
  padding-left: 30px;
  line-height: 44px;
  font-weight: bold;
}
.notice .wd div {
  float: left;
  width: 570px;
  height: 44px;
}
.notice .wd div ul {
  clear: both;
}
.notice .wd div ul li {
  clear: both;
  height: 44px;
  line-height: 44px;
}
</style>