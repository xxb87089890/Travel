<template>
  <div class="recommend">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item"
        v-for="item of recommendList"
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
  data: function () {
    return {
      recommendList: [{
        id: '00001',
        imgUrl: require('@/assets/img/xtx.jpg'),
        title: '中国福建三明侠天下旅游区+侠天下旅游区一日游【赠送旱滑道体验玻璃桥，感恩回馈大放价！】',
        score: '4.2分'
      }, {
        id: '00002',
        imgUrl: require('@/assets/img/hdlfc.jpg'),
        title: '厦门环岛路帆船出海体验【扬帆出海，圆您水手梦】',
        score: '4.8分'
      }, {
        id: '00003',
        imgUrl: require('@/assets/img/fzyt.jpg'),
        title: '福州永泰天门山套票、含大门票+玻璃天桥+鞋套+玻璃栈道',
        score: '5.4分'
      }, {
        id: '00004',
        imgUrl: require('@/assets/img/xmxdd.jpg'),
        title: '福建厦门小嶝岛+赶海抓螃蟹渔民体验+逛历史古村+肉眼看金门一日游【海鲜午餐 亲子优选纯玩小团】',
        score: '4.9分'
      }, {
        id: '00005',
        imgUrl: require('@/assets/img/sddch.jpg'),
        title: '福建东山岛出海 东门屿海底探秘红珊瑚/浮潜体验 带你进入蓝色海洋世界',
        score: '5.2分'
      }]
    }
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
