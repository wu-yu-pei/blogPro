<template>
  <div class="show">
      <div class="show-header-nav">
        <div class="show-header-nav-left">
          <h1 @click="out" title="退出">Blog</h1>   
        </div>
        <div class="show-header-nav-right">
          <ul>
            <li>
              <a href="https://www.cnblogs.com/">博客园</a>
            </li>
            <li>
              <a @click="go('/index/lately')">首页</a>
            </li>
            <li>
              <a href="">新随笔</a>
            </li>
            <li>
              <a href="">联系</a>
            </li>
            <li>
              <a href="">管理</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="show-body">
        <div class="show-body-left">
            <div class="left-title">

            </div>
            <div class="left-title">

            </div>
            <div class="left-title">

            </div>
        </div>
        <div class="show-body-right">

        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'showacticle',
    methods: {
        go(target) {
            this.$router.push(target)
        },
        out() {
        this.$router.replace('/')
        localStorage.setItem('blogpro',0)
        }
    },
    created() {
        document.title = '我的文章'
    },
}
</script>

<style scoped lang='less'>
.show {
    max-width: 100vw;
    height: 1300px;
    background: url("../../assets/imgs/indexbg.gif");
    padding: 0;
    box-sizing: border-box;
    .show-header-nav {
      width: 100%;
      height: 49px;
      line-height: 49px;
      overflow: hidden;
      border-bottom: 2px solid #000;
      box-sizing: border-box;
      background: #fff;
      margin-bottom: 15px;
      .show-header-nav-left {
        float: left;
        h1 {
          cursor: pointer;
           text-shadow: 1.8px -0.2px 0.1px #000,2.8px -1.2px 0.1px #000;
        }
      }
      .show-header-nav-right {
        float: right;
        ul {
          width: 100%;
          li {
            position: relative;
            float: left;
            display: block;
            width: 100px;
            height: 59px;
            text-align: center;
            box-sizing: border-box;
            border: 2px solid transparent;
            letter-spacing: 3px;
            font-weight: 700;
            &:hover a{
              color: blue;
            }
            &::after {
              position: absolute;
              bottom: -2px;
              left:0 ;
              display: block;
              content: "haha";
              width: 100%;
              height: 2px;
              background-color: blue;
              transform: scale(0);
              transition: all linear .2s;
            }
            &:hover::after{
              transform: scale(1);
            }
          }
        }
      }
    }
    .show-body {
        width: 1300px;
        height: calc(100% - 49px - 15px);
        overflow: hidden;
        margin: 0 auto;
        .show-body-left {
            float: left;
            width: 20%;
            height: 100%;
            // background-color: yellow;
            .left-title {
                width: 100%;
                height: 200px;
                background-color: #fff;
                margin: 10px 0;
            }
        }
        .show-body-right {
            float: right;
            width: 79%;
            height: 90%;
            background-color: #fff;
            margin: 10px 0;
        }
    }
}
</style>