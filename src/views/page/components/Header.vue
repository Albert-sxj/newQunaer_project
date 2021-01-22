<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      请输入
    </div>
    <router-link to="/city">
      <div class="header-right">
        <!-- {{this.city}} -->
        上海
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="less" scoped>
@import '~@/assets/css/style.less';
.header {
  display: flex;
  line-height: @headerHeight;
  background: @bgColor;
  color: #fff;
  .header-left {
    width: 0.64rem;
    float: left;
    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }
  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;
    display: flex;
    align-items: center;
  }
  .header-right {
    min-width: 1.04rem;
    padding: 0 0.1rem;
    float: right;
    text-align: center;
    color: #fff;
    .arrow-icon {
      margin-left: -0.04rem;
      font-size: 0.24rem;
    }
  }
}
</style>
