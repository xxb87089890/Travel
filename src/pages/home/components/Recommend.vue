<template>
  <div class="recommend">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item"
        v-for="item of list"
        :key="item.id"
      >
        <img
         class="recommend-img"
         :src="item.imgUrl"
        >
        <div class="recommend-info">
          <p class="title">{{item.title}}</p>
          <p class="score">{{item.score}}</p>
          <button class="details-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.recommend {
  .recommend-title {
    margin-top: .2rem;
    background: #eee;
    line-height: .8rem;
    text-indent: .2rem;
  }
  .item {
    overflow: hidden;
    display: flex;
    height: 1.9rem;
    border-bottom: 1px solid #ccc;
    .recommend-img {
      width: 1.7rem;
      height: 1.7rem;
      padding: .1rem;
    }
    .recommend-info {
      // min-width: 0;
      flex: 1;
      padding: .1rem;
      .title {
        line-height: .34rem;
        font-size: .32rem;
        // @include textOverflow;
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
      }
      .score {
        margin-top: .1rem;
        line-height: .4rem;
        color: #099fde;
      }
      .details-button {
        line-height: .44rem;
        margin-top: .1rem;
        padding: 0 .2rem;
        background: #ff9300;
        border-radius: .06rem;
        color: #fff;
      }
    }
  }
}
</style>
