<template>
  <div class="index">
      <div class="index-header-nav">
        <div class="index-header-nav-left">
          <h1 @click="out">Blog</h1>
        </div>
        <div class="index-header-nav-right">
          <ul>
            <li>
              <a href="https://www.cnblogs.com/">博客园</a>
            </li>
            <li>
              <a href="">首页</a>
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
      <div class="index-baner">
        <p>work</p>
        <p>love work</p>
        <div class="index-info-image">
          <img src="../../assets/imgs/infoimg.gif " alt="">
        </div>
      </div>
      <div class="index-info">
        <h1>二蛋的小黄裤</h1>
        <p>热爱</p>
        <div class="index-info-myinfo">
          <div class="index-info-myinfo-item">
            <span>95</span>
            <span>被访问量</span>
          </div>
          <div class="index-info-myinfo-item">
            <span>13</span>
            <span>原创文章</span>
          </div>
          <div class="index-info-myinfo-item">
            <span>1000+</span>
            <span>作者排名</span>
          </div>
          <div class="index-info-myinfo-item">
            <span>20</span>
            <span>粉丝数量</span>
          </div>
        </div>
      </div>
      <div class="index-body">
        <div class="index-body-left">

        </div>
        <div class="index-body-right">

        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'index',
    methods: {
      //点击h1 退出
      out() {
        this.$router.replace('/')
        localStorage.setItem('blogpro',0)
      }
    },
}
</script>

<style scoped lang="less">
.index {
    width: 1300px;
    height: 500px;
    margin: 0  auto;
    box-sizing: border-box;
    .index-header-nav {
      width: 100%;
      height: 61px;
      line-height: 61px;
      overflow: hidden;
      border-bottom: 2px solid #000;
      box-sizing: border-box;
      .index-header-nav-left {
        float: left;
        h1 {
          cursor: pointer;
           text-shadow: 1.8px -0.2px 0.1px #000,2.8px -1.2px 0.1px #000;
        }
      }
      .index-header-nav-right {
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
    .index-baner {
      position: relative;
      width: 100%;
      height: 100px;
      background: #412e2e;
      background: url("../../assets/imgs/banerbg.jpg");
      background-size: cover;
      background-position: -200px 0;
      line-height: 30px;
      p {
        color: #fff;
        margin: 0 10px;
      }
      .index-info-image {
        position: absolute;
        transform: translate(-50%,7%);
        left:50%;
        top: 50%;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        padding: 3px;
        overflow: hidden;
        background-color: #fff;
        img {
          width: 100%;
          height: 100%;
          // margin-left:-50px ;
        }
        // background-color: red;
      }
    }
    .index-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 338px;
      background-color: #fff;
      margin-top: 0px;
      h1 {
        font-weight: normal;
        letter-spacing: 3px;
        margin: 0 0 8px 0;
      }
      p {
        color: #999aaa;
        margin-bottom: 5px;
      }
      .index-info-myinfo {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        .index-info-myinfo-item {
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          width: 100px;
          height: 100px;
          margin: 0 10px;
          :first-child {
            font-family: Georgia, 'Times New Roman', Times, serif;
            font-size: 16px;
            font-weight: 700;
          }
          :last-child {
            color: #aaa999;
          }
        }
      }
    }
    .index-body {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 1020px;
      margin-top: -35px;
      background-color: yellow; 
      .index-body-left {
        width: 25%;
        height: 200px;
        background-color: red;
      }
      .index-body-right {
        width: 70%;
        height: 200px;
        background-color: blue;
      }
    }
}

</style>