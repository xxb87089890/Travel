<template>
  <div class="icons">
    <swiper>
      <swiper-slide
        v-for="(page, index) of pages"
        :key="index"
      >
        <div
          class="icon"
          v-for="item of page"
          :key="item.id"
        >
          <div class="icon-img">
            <img :src="item.imgUrl" />
          </div>
          <p>{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: require('@/assets/img/jdmp.png'),
        desc: '景点门票'
      }, {
        id: '0002',
        imgUrl: require('@/assets/img/sswl.png'),
        desc: '水上玩乐'
      }, {
        id: '0003',
        imgUrl: require('@/assets/img/ylc.png'),
        desc: '游乐场'
      }, {
        id: '0004',
        imgUrl: require('@/assets/img/zrfg.png'),
        desc: '自然风光'
      }, {
        id: '0005',
        imgUrl: require('@/assets/img/yry.png'),
        desc: '一日游'
      }, {
        id: '0006',
        imgUrl: require('@/assets/img/xtx.png'),
        desc: '侠天下'
      }, {
        id: '0007',
        imgUrl: require('@/assets/img/wys.png'),
        desc: '武夷山'
      }, {
        id: '0008',
        imgUrl: require('@/assets/img/hyg.png'),
        desc: '海洋馆'
      }, {
        id: '0009',
        imgUrl: require('@/assets/img/wzga.png'),
        desc: '玩转贵安'
      }, {
        id: '0010',
        imgUrl: require('@/assets/img/qbwl.png'),
        desc: '全部玩乐'
      }]
    }
  },
  computed: {
    pages: function () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="scss" scoped>
.icons /deep/ {
  .swiper-wrapper {
    height: 0;
    padding-bottom: 50%;
  }
}
.icons {
  margin-top: .1rem;
  .icon {
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    position: relative;
    overflow: hidden;
    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: .44rem;
      box-sizing: boder-box;
      padding: .1rem;
      img {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }
    p {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: .44rem;
      line-height: .44rem;
      text-align: center;
      color: $TextColor;
      @include textOverflow;
    }
  }
}
</style>
