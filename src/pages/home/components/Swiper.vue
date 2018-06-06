<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgurl"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '001',
        imgurl: require('@/assets/img/meinvyeshou.jpeg')
        // 在script里面需要加require才能获取图片
      }, {
        id: '002',
        imgurl: require('@/assets/img/guangzhouchanglong.jpeg')
      }, {
        id: '003',
        imgurl: require('@/assets/img/laoyuanzi.jpeg')
      }, {
        id: '004',
        imgurl: require('@/assets/img/wuyishan.jpeg')
      }, {
        id: '005',
        imgurl: require('@/assets/img/xiamenfangte.jpeg')
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper /deep/ {
  .swiper-pagination-bullet-active {
    background: #fff;
  }
}
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 32.58%;
  // padding-bottom是根据图片的高和宽的比例
  background: #ccc;
  .swiper-img {
    width: 100%;
  }
}
</style>
