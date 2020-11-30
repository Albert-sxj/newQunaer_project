<template>
  <div class="home">
    <Header msg="Welcome to Your Vue.js App"/>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>
<script>
import Header from '@/views/home/components/Header.vue'
import HomeSwiper from '@/views/home/components/Swiper.vue'
import HomeIcon from '@/views/home/components/Icon.vue'
import HomeRecommend from '@/views/home/components/Recommend.vue'
import HomeWeekend from '@/views/home/components/Weekend.vue'
export default {
  name: 'Home',
  components: {
    Header,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  }
}
</script>
<style scoped>
</style>
