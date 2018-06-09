<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      }
    }
  },
  // json传进去默认是空的，所以会页面是最后一张图，所以list.length有数据时在显示
  computed: {
    showSwiper () {
      return this.list.length
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
