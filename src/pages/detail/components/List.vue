<template>
  <div>
    <div class="list" v-for="(item, index) of list" :key="index">
      <div class="list-title">
        <span class="list-title-icon"></span>
        {{item.title}}
      </div>
      <div class="list-childlist" v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>
<style lang="scss" scoped="">
.list-title {
  height: .88rem;
  padding-left: .2rem;
  line-height: .88rem;
  font-size: .32rem;
  .list-title-icon {
    position: relative;
    top: .06rem;
    display: inline-block;
    width: .36rem;
    height: .36rem;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    background-size: .4rem 3rem;
  }
}
.list-childlist {
  padding-left: .3rem;
}
</style>
