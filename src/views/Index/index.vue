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
        <h1>{{infoname}}</h1>
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
          <div class="left-birsth">
            <i class="el-icon-potato-strips"></i>
            <span>于 </span>
            <span>{{infobirthday}}</span>
            <span> 加入blogPro</span>
          </div>
          <div class="left-date">
            <ElCalendar ></ElCalendar>
          </div>
          <!-- 分类 -->
          <div class="left-classify">
            <div class="left-classify-title">
              <i class="el-icon-s-operation"></i>
              <span>TA的分类</span>
            </div>
            <div class="left-classify-body">
              <div>· JavaScript</div>
              <div>· TypeScript</div>
              <div>· Css</div>
              <div>· Vue</div>
              <div>· React</div>
              <div>· Node</div>
            </div>
          </div>
          <!-- 最新文章 -->
          <div class="left-classify">
            <div class="left-classify-title">
              <i class="el-icon-tickets"></i>
              <span>最新文章</span>
            </div>
            <div class="left-classify-body">
              <div>title</div>
              <div>title</div>
            </div>
          </div>
          <!-- 最新评论 -->
           <div class="left-classify">
            <div class="left-classify-title">
              <i class="el-icon-message-solid"></i>
              <span>最新评论</span>
            </div>
            <div class="left-classify-body">
              <div>写的不错,加个好友吧</div>
              <div>牛啊牛啊</div>
            </div>
          </div>
        </div>
        <div class="index-body-right">
          <div class="index-body-right-nav">
            <router-link to="" class="nav-item">最近</router-link>
            <router-link to="" class="nav-item">文章</router-link>
            <router-link to="" class="nav-item">关注</router-link>
          </div>
          <div class="index-body-right-view">
              <router-view></router-view>
          </div>
        </div>
      </div> 
      <el-backtop visibility-height="100">
        <div class="line1">
        
        </div>
      </el-backtop>
      
  </div>
   
</template>

<script>
import {ref} from 'vue'
import getUserinfo from '../../api/index/index'
export default {
    name:'index',
    setup(props) {
      let date = new Date()
      let infoname = ref('')
      let infobirthday = ref('')
      return {
        date,
        infoname,
        infobirthday
      }
    },
    methods: {
      //点击h1 退出
      out() {
        this.$router.replace('/')
        localStorage.setItem('blogpro',0)
      }
    },
    created() {
      // 发请求,获取个人信息 进行展示
      getUserinfo({
        userid:JSON.parse(localStorage.getItem("userinfo")).userid,
      }).then(res => {
        console.log(res);
        this.infoname = res.data[0].username
        this.infobirthday = res.data[0].userinit
      })
    },
}
</script>

<style scoped lang="less">
.index {
    position: relative;
    width: 1300px;
    // max-width: 100vw;
    height: auto;
    margin: 0  auto;
    box-sizing: border-box;
    padding-bottom: 20px;
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
        font-size: 20px;
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
      margin-top: -75px;
      background-color: #f4f5f5;
      padding-top: 20px;
      padding-bottom: 20px;
      padding-right: 10px;
      .index-body-left {
        width: 29%;
        height: 200px;
        >div {
          margin-left: 10px;
          box-sizing: border-box;
        }
        .left-birsth {
          width: 100%;
          height: 50px;
          background-color: #fff;
          line-height: 50px;
          padding: 0 20px;
        }
        .left-date {
          width: 100%;
        }
        .left-classify {
          width: 100%;
          margin-top: 20px;
          background-color: #fff;
          .left-classify-title {
            // width: 100%;
            height: 50px;
            padding: 0 20px;
            line-height: 50px;
            margin-left: 0;
            border-bottom: 1px solid #EBEEF5;
          }
          .left-classify-body {
            width: 100%;
            padding: 0 20px;
            div {
              height: 30px;
              margin: 5px 0;
              cursor: pointer;
            }
          }
        }
      }
      .index-body-right {
        width: 68%;
        height: 200px;
        div {
          margin-right: 10px;
        }
        .index-body-right-nav {
          width: 100%;
          height: 50px;
          background-color: #fff;
          padding: 0 20px;
          .nav-item {
            display: block;
            float: left;
            width: 100px;
            height: 100%;
            line-height: 50px;
          }
        }
      }
    }
    .line1 {
      position: fixed;
      top: 0;
      left: 8px;
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
        /* display: none !important; */
        width: 0 !important;
        height: 0 !important;
    }
}


</style>