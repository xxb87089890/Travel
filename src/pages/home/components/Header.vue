<template>
  <div class="hearder">
    <div class="hearder-return">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="hearder-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="hearder-city">
      {{this.city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="scss" scoped>
  .hearder {
    display: flex;
    line-height: .86rem;
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
      -webkit-flex: 1;   /* Chrome */
      -ms-flex: 1;       /* IE 10 */
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
      width: 1.24rem;
      text-align: center;
      .arrow-icon {
        font-size: .24rem;
        margin-left: -.04rem;
      }
    }
  }
</style>
