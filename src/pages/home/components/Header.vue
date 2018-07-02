<template>
  <div class="hearder">
    <div class="hearder-return">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="hearder-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="hearder-city">
        <!-- {{this.$store.state.city}} -->
        <!-- {{this.city}} -->
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="scss" scoped>
.hearder {
  display: flex;
  line-height: $headerHeight;
  background: $bgColor;
  color: #fff;
  .hearder-return {
    width: .64rem;
    float: left;
    .back-icon {
      text-align: center;
      font-size: .4rem;
    }
  }
  .hearder-input {
    height: .64rem;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    background: #fff;
    color: #ccc;
    border-radius: 4px;
    margin-top: .12rem;
    margin-bottom: .2rem;
    padding-left: .2rem;
    line-height: .64rem;
  }
  .hearder-city {
    float: right;
    min-width: 1.24rem;
    padding: 0 .1rem;
    text-align: center;
    color: #fff;
    .arrow-icon {
      font-size: .24rem;
      margin-left: -.05rem;
    }
  }
}
</style>
