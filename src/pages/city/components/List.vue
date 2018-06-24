<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="city-list">
        <h2 class="title">定位城市</h2>
        <div class="item-wrapper">
          <div class="item">
            <!-- <span>{{this.$store.state.city}}</span> -->
            <span>{{this.currentCity}}</span>
          </div>
        </div>
      </div>
      <div class="city-list">
        <h3 class="title">热门推荐</h3>
        <div class="item-wrapper">
          <div
            class="item"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>
      <div
        class="city-list"
        v-for="(item, key) of cities"
        :key="key"
        :ref="key"
      >
        <h3 class="title">{{key}}</h3>
        <div class="item-list">
          <div
            class="item"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      // this.$store.dispatch('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapActions(['changeCity'])
  },
  mounted () {
    const wrapper = this.$refs.wrapper
    this.scroll = new BScroll(wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        // console.log(element)
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  .city-list {
    .title {
      padding-left: .2rem;
      line-height: .68rem;
      background: #eee;
      color: #666;
      font-size: .28rem;
    }
    .item-wrapper {
      overflow: hidden;
      padding: .1rem .6rem .1rem .1rem;
      .item {
        float: left;
        width: 33.33%;
          span {
          display: block;
          margin: .1rem;
          padding: .2rem 0;
          text-align: center;
          border: .02rem solid #ccc;
          border-radius: .06rem
        }
      }
    }
    .item-list {
      .item {
        line-height: .76rem;
        padding-left: .2rem;
        border-bottom: .02rem solid #ccc;
      }
    }
  }
}
</style>
