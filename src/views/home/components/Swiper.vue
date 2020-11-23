<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.imgUrl" alt>
      </swiper-slide>
      <!-- <swiper-slide>
        <img src="/images/banner02.png" alt>
      </swiper-slide>-->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }, //这样写小圆点就有了
        loop: true
      },
      swiperList: [
        {
          id: '001',
          imgUrl: require('../../../assets/images/banner02.png')
        },
        {
          id: '002',
          imgUrl: require('../../../assets/images/banner01.jpg')
        }
      ]
    }
  }
}
</script>
<style scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}
</style>

<style lang="less" scoped>
// .wrapper /deep/ .swiper-pagination-bullet-active {
//   background: red;
// }
.wrapper {
  width: 100%;
  height: 3rem;
  background: #eee;
  img {
    width: 100%;
    height: 3rem;
    display: block;
  }
}
</style>


