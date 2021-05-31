<template>
    <el-backtop>
        <div class="line">
        
        </div>
    </el-backtop>
</template>

<script>
export default {
    name:'back-top'
}
</script>

<style scoped>
.line {
      position: fixed;
      top: 0;
      right: 8px;
      width: 50px;
      height: 90vh;
      background: url("../../../src/assets/imgs/line.gif");
      background-size: cover;
      cursor: pointer;
      animation: move 1.1s  linear infinite alternate;
    }
    @keyframes move {
      from {
        top: 0;
      }
      to {
        top: -25px;
      }
    }
    /* 重写返回顶部样式 */
    .el-backtop {
        width: 0 !important;
        height: 0 !important;
    }
</style>