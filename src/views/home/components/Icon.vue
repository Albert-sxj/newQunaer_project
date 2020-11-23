<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'Icon',
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }, //这样写小圆点就有了
        loop: true
      },
      list: [
        {
          id: '001',
          imgUrl:
            'https://file.40017.cn/appresource/image/touch/home/icon_train.png',
          desc: '电影'
        },
        {
          id: '002',
          imgUrl:
            'https://file.40017.cn/appresource/image/touch/home/icon_train.png',
          desc: '电影'
        },
        {
          id: '003',
          imgUrl:
            'https://file.40017.cn/appresource/image/touch/home/icon_train.png',
          desc: '电影'
        },
        {
          id: '004',
          imgUrl:
            'https://file.40017.cn/appresource/image/touch/home/icon_train.png',
          desc: '电影'
        },
        {
          id: '005',
          imgUrl:
            'https://file.40017.cn/appresource/image/touch/home/icon_train.png',
          desc: '电影'
        },
        {
          id: '006',
          imgUrl:
            'https://file.40017.cn/appresource/image/touch/home/icon_train.png',
          desc: '电影'
        },
        {
          id: '007',
          imgUrl:
            'https://file.40017.cn/appresource/image/touch/home/icon_train.png',
          desc: '电影'
        },
        {
          id: '008',
          imgUrl:
            'https://file.40017.cn/appresource/image/touch/home/icon_train.png',
          desc: '电影'
        },
        {
          id: '009',
          imgUrl:
            'https://file.40017.cn/appresource/image/touch/home/icon_train.png',
          desc: '电影'
        },
        {
          id: '010',
          imgUrl:
            'https://file.40017.cn/appresource/image/touch/home/icon_train.png',
          desc: '电影'
        }
      ]
    }
  },
  computed: {
    pages() {
      let pages = []
      this.list.forEach((item, index) => {
        let page = Math.floor(index / 8)
        if (!Array.isArray(pages[page])) {
          pages[page] = []
        }
        pages[page].push(item)
      })

      return pages
    }
  }
}
</script>
<style scoped>
.icons >>> .swiper-container {
  height: 3.75rem;
}
</style>

<style lang="less" scoped>
@import '~@/assets/css/style.less';
// .icons /deep/ .swiper-container {
//   height: 0;
//   padding-bottom: 50%;
// }
.icons {
  margin-top: 0.1rem;
  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;
      .icon-img-content {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }
    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: #333333;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>

