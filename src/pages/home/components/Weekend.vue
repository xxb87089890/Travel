<template>
  <div class="weekend">
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="item"
        v-for="item of list"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img
           class="weekend-img"
           :src="item.imgUrl"
          >
        </div>
        <div class="weekend-info">
          <p class="title">{{item.title}}</p>
          <p class="desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.weekend {
  .weekend-title {
    background: #eee;
    line-height: .8rem;
    text-indent: .2rem;
  }
  .item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 37.1%;
    .weekend-img {
      width: 100%;
    }
  }
  .weekend-info {
    padding: .2rem;
    .title {
      line-height: .54rem;
      font-size: .32rem;
      overflow:hidden;
      text-overflow:ellipsis;
      display:-webkit-box;
      -webkit-box-orient:vertical;
      -webkit-line-clamp:2;
    }
    .desc {
      margin-top: .1rem;
      line-height: .54rem;
    }
  }
}
</style>
