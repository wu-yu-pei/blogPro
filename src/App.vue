<template>
  <!-- <router-view/> -->
  <div class="index">
     <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>

export default {
  name:'app',
  created() {
    // 拦截非法登录
    if(localStorage.getItem('blogpro') !== "1") {
      console.log(20);
      this.$router.push('/')
    }else {
      // this.$router.replace('/index')
    }
  },
}
</script>

<style scoped lang='less'>
.index {
  // background: #000;
  background: url("../src/assets/imgs/indexbg-index.gif");
  // background: url("../src/assets/imgs/indexbg.png") repeat-y;
  // background-size: cover;
}
</style>
