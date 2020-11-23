<template>
  <div class="home">
    <Header msg="Welcome to Your Vue.js App"/>
    <home-swiper></home-swiper>
  </div>
</template>
<script>
import Header from '@/views/home/components/Header.vue'
import HomeSwiper from '@/views/home/components/Swiper.vue'
export default {
  name: 'Home',
  components: {
    Header,
    HomeSwiper
  }
}
</script>
<style land="less" scoped>
</style>
