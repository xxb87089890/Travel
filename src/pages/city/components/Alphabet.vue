<template>
  <div>
    <ul class="alphabet">
      <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
     {{item}}
    </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          //  函数节流,防止频率的滑动，节省性能
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // const startY = this.$refs['A'][0].offsetTop
          // 上面这段代码不放在这里，因为startY是固定的值，每次执行方法都要运行一次，所以在data定义变量，在updated生命周期里面更新
          // console.log(startY)
          // startY是A离header蓝色底部的距离
          const touchY = e.touches[0].clientY - 79
          // console.log(touchY)
          // touchY是滚动离header蓝色头部的距离减去header的高度
          const index = Math.floor((touchY - this.startY) / 22)
          // console.log(index)字母
          // index 22是每个li的高度，算出是第几个字母
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  computed: {
    // 把this.cities的对象转换成数组
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  }
}
</script>

<style lang="scss" scoped>
.alphabet {
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: .4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .item {
    line-height: .44rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>
