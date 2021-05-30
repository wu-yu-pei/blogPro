<template>
  <router-view/>
</template>

<script>

export default {
  name:'app',
  created() {
    // 拦截非法登录
    if(localStorage.getItem('blogpro') !== "1") {
      console.log(20);
      this.$router.push('/')
    }
  },
}
</script>

<style>

</style>
