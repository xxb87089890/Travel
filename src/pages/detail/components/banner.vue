<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1707/45/4524631d448c1aea3.water.jpg_600x330_840469ef.jpg" />
      <div class="banner-info">白水洋(AAAAA景区)</div>
      <div class="imgswipeicon">
        <span class="iconfont">&#xe6ee;</span>
        <span class="iconnumber">27</span>
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
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1711/e6/e6c63a841145702a3.img.jpg_r_800x800_e3d697bd.jpg', 'http://img1.qunarzz.com/sight/p0/1704/d2/d2a029bded2f6b4aa3.img.jpg_r_800x800_d0d2c749.jpg']
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
