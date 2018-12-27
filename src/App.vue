<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import '../static/normal';
.fx-row{
  display: flex;
  flex-direction: row;
}
.fx-m-start{
  justify-content: flex-start;
}
.fx-no-shrink{
  flex-shrink: 0;
}
</style>
