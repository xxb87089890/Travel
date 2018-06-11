<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :list="hotCities"></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotCities: []
    }
  },
  methods: {
    getCityinfo () {
      axios.get('/api/city.json')
        .then((res) => {
          res = res.data
          if (res.ret && res.data) {
            const data = res.data
            this.hotCities = data.hotCities
          }
        })
    }
  },
  mounted () {
    this.getCityinfo()
  }
}
</script>

<style lang="scss" scoped>

</style>
