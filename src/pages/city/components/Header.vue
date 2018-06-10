<template>
  <div class="hearder">
    城市选择
    <router-link to="/">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="scss" scoped>
.hearder {
  position: relative;
  height: $headerHeight;
  line-height: $headerHeight;
  background: $bgColor;
  text-align: center;
  color: #fff;
  font-size: .32rem;
  .back-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: .64rem;
    float: left;
    text-align: center;
    font-size: .4rem;
    color: #fff;
  }
}
</style>
