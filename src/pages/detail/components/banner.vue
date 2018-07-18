<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">{{ sightName }}</div>
      <div class="imgswipeicon">
        <span class="iconfont">&#xe6ee;</span>
        <span class="iconnumber">{{this.gallaryImgs.length}}</span>
      </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    >
    </common-gallary>
  </div>
</template>

<script>
import commonGallary from 'common/Gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    commonGallary
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false,
      imgs: this.gallaryImgs
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-img {
    width: 100%;
  }
  .banner-info,
  .imgswipeicon {
    position: absolute;
    right: 0;
    color: #fff;
  }
  .banner-info {
    left: 0;
    bottom: 0;
    padding-left: .2rem;
    font-size: .32rem;
    line-height: .6rem;
    background:linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  }
  .imgswipeicon {
    width: 1.2rem;
    height: .4rem;
    left: .2rem;
    bottom: .86rem;
    line-height: .4rem;
    font-size: .24rem;
    text-align: center;
    border-radius: .2rem;
    background: rgba(0,0,0,.5);
    .iconfont {
      font-size: .24rem;
    }
  }
}
</style>
