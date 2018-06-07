<template>
  <div class="weekend">
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="item"
        v-for="item of recommendList"
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
  data: function () {
    return {
      recommendList: [{
        id: '00001',
        imgUrl: require('@/assets/img/fzby.jpg'),
        title: '福州必游TOP10',
        desc: '大美福州，必游之处'
      }, {
        id: '00002',
        imgUrl: require('@/assets/img/tl.jpg'),
        title: '土楼不能说的秘密',
        desc: '一座座神秘的建筑，一段段传奇的历史'
      }, {
        id: '00003',
        imgUrl: require('@/assets/img/xhz.jpg'),
        title: '熊孩子玩乐去哪儿',
        desc: '这里在向熊孩子们招手'
      }, {
        id: '00004',
        imgUrl: require('@/assets/img/wzxr.jpg'),
        title: '玩转夏日，戏水福州',
        desc: '福州给你一个别样清爽夏天'
      }, {
        id: '00005',
        imgUrl: require('@/assets/img/byyfz.jpg'),
        title: '不一样的福州',
        desc: '各种嗨皮，各种回忆'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.weekend {
  .weekend-title {
    margin-top: .2rem;
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
