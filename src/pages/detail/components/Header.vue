<template>
  <div>
    <router-link tag="div" class="header-abs" to="/" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
        景点详情
        <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const offsetTop = document.querySelector('.header-abs').offsetTop
      const absWidth = document.querySelector('.header-abs').offsetHeight
      if (scrollTop > (offsetTop + absWidth)) {
        let opacity = scrollTop / 100
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
.header-abs {
  position: absolute;
  top: .2rem;
  left: .2rem;
  width: .7rem;
  height: .7rem;
  line-height: .7rem;
  text-align: center;
  background: rgba(0,0,0,.8);
  border-radius: .4rem;
  .header-abs-back {
    color: #fff;
    font-size: .4rem;
  }
}
.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $headerHeight;
  line-height: $headerHeight;
  background: $bgColor;
  text-align: center;
  color: #fff;
  font-size: .32rem;
  .header-fixed-back {
    position: absolute;
    top: 0;
    left: 0;
    width: .64rem;
    float: left;
    text-align: center;
    font-size: .4rem;
    color: #fff;
  }
}
</style>
