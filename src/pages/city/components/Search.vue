<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音" />
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
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
</style>
