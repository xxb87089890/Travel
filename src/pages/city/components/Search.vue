<template>
  <div>
    <div class="search">
      <input v-model="keyworld" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <!-- v-show="keyworld"表示当keyword有值显示search-content内容 -->
    <div
      class="search-content"
      ref="search"
      v-show="keyworld"
    >
      <ul>
        <li
          class="search-item"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li
          class="search-item"
          v-if="hasNoData">
            没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapActions } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyworld: '',
      list: [],
      timer: null
    }
  },
  methods: {
    handleCityClick (city) {
      // this.$store.dispatch('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapActions(['changeCity'])
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyworld () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        // 删除搜索关键词设置不会有匹配项
        if (!this.keyworld) {
          this.list = []
          return
        }
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyworld) > -1 || value.name.indexOf(this.keyworld) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    const search = this.$refs.search
    this.scroll = new BScroll(search)
  }
}
</script>

<style lang="scss" scoped>
.search {
  height: .72rem;
  padding: 0 .2rem;
  background: $bgColor;
  .search-input {
    width: 100%;
    height: .62rem;
    padding: 0 .2rem;
    line-height: .62rem;
    text-align: center;
    box-sizing: border-box;
    font-size: .32rem;
    color: #666;
    border-radius: .08rem;
  }
}
.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
  .search-item {
    padding-left: .2rem;
    line-height: .62rem;
    color: #666;
    background: #fff;
    border-bottom: 1px solid #eee;
  }
}
</style>
