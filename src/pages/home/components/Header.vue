<template>
  <div class="hearder">
    <div class="hearder-return">返回</div>
    <div class="hearder-input">输入城市/景点/游玩主题</div>
    <div class="hearder-city">三亚</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="scss" scoped>
  .hearder {
    display: flex;
    line-height: .86rem;
    background: #00bcd4;
    color: #fff;
    .hearder-return {
      width: .64rem;
      float: left;
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
      line-height: .64rem;
    }
    .hearder-city {
      float: right;
      width: 1.24rem;
      text-align: center;
    }
  }
</style>
