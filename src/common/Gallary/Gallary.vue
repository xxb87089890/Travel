<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <img class="gallary-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commonGallary',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  },
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .container /deep/ .swiper-container {
    overflow: inherit;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content:center;
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    .wrapper {
      width: 100%;
      .gallary-img {
        width: 100%;
      }
      .swiper-pagination {
        color: #fff;
        bottom: -1rem;
      }
    }
  }
</style>
