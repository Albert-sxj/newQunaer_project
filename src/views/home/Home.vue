<template>
  <div class="home">
    <Header msg="Welcome to Your Vue.js App"/>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
  </div>
</template>
<script>
import Header from '@/views/home/components/Header.vue'
import HomeSwiper from '@/views/home/components/Swiper.vue'
import HomeIcon from '@/views/home/components/Icon.vue'
export default {
  name: 'Home',
  components: {
    Header,
    HomeSwiper,
    HomeIcon
  }
}
</script>
<style land="less" scoped>
</style>
