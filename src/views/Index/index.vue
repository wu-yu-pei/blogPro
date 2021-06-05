<template>
  <div class="index">
      <div class="index-header-nav">
        <div class="index-header-nav-left">
          <h1 @click="out" title="退出">Blog</h1>
        </div>
        <div class="index-header-nav-right">
          <ul>
            <li>
              <a @click="goAlluserActicle()">博客园</a>
            </li>
            <li>
              <a href="">首页</a>
            </li>
            <li>
              <a @click="goWrite()">新随笔</a>
            </li>
            <li>
              <a @click="goContact()">联系</a>
            </li>
            <li>
              <a @click="goAdministration()">管理</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="index-baner">
        <p>work</p>
        <p>love work</p>
        <!-- <img src="../../assets/imgs/index-ban.png" alt=""> -->
        <div class="index-info-image">
          <img :src="'http://vueshop.glbuys.com/userfiles/head/'+imgurl" alt="">
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
            <span>{{allacticles.length}}</span>
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
                <NoDate  v-if="getTagName.length == 0"></NoDate>
              <template v-else>
                <div v-for="(item,index) in getTagName" :key="index">· {{item}} <span> {{targcount[item]}}篇</span></div>
              </template>
              <!-- <div>· TypeScript</div>
              <div>· Css</div>
              <div>· Vue</div>
              <div>· React</div>
              <div>· Node</div> -->
            </div>
          </div>
          <!-- 最新文章 -->
          <div class="left-classify">
            <div class="left-classify-title">
              <i class="el-icon-tickets"></i>
              <span>最新文章</span>
            </div>
            <div class="left-classify-body">
              <NoDate  v-if="getTagName.length == 0"></NoDate>
              <template v-else>
                <div v-for="(item,index) in allacticles.slice(0,5)" @click="goShow(item.acticleinfoid)" :key="index">{{item.acticleinfotitle}} <span style="float:right;margin-right:40px">{{item.acticleinfotime}}</span></div>
              </template>
            </div>
          </div>
          <!-- 最新评论 -->
           <div class="left-classify">
            <div class="left-classify-title">
              <i class="el-icon-message-solid"></i>
              <span>最新评论</span>
            </div>
            <div class="left-classify-body">
              <!-- <div>写的不错,加个好友吧</div>
              <div>牛啊牛啊</div> -->
              <div class="nodate">
                功能暂未开放
              </div>
            </div>
          </div>
        </div>
        <div class="index-body-right">
          <div class="index-body-right-nav">
            <router-link to="/index/lately" class="nav-item" active-class="router-link-active">最近·{{allacticles.slice(0,5).length}}</router-link>
            <router-link to="/index/allactive" class="nav-item" active-class="router-link-active">文章·{{allacticles.length}}</router-link>
            <router-link to="/index/follow" class="nav-item" active-class="router-link-active">关注</router-link>
          </div>
          <div class="index-body-right-view">
              <router-view></router-view>
          </div>
        </div>
      </div> 
      <BackTop></BackTop>
      <div>
      </div>
  </div>
   
</template>

<script>
import {ref} from 'vue'
import getUserinfo from '../../api/index/index'
import getUserAllActicle from'../../api/allacticle/index'
// 返回顶部 组件
import BackTop from '../../components/BackTop/index'
import NoDate from '../../components/NoDate/index'
export default {
    name:'index',
    setup(props) {
      let date = new Date()
      let infoname = ref('')
      let infobirthday = ref('')
      let imgurl = "236214902.gif"
      return {
        date,
        infoname,
        infobirthday,
        imgurl
      }
    },
    data() {
      return {
        allacticles:[],
        targname:[],
        targcount:{}
      }
    },
    components:{
      BackTop,
      NoDate
    },
    computed : {
      getTagName() {
        for(let i = 0;i<this.allacticles.length;i++) {
          this.targname.push(this.allacticles[i].acticleinfocol)
        }
        this.targcount =  this.targname.reduce((obj,name) => {
          if(name in obj) {
            obj[name]++
          }else {
            obj[name] = 1
          }
          return obj
        },{})
        // 进行数组的去重 但是获取不到每个分类又多少文章了
        return [...new Set(this.targname)]
      }
    },
    methods: {
      //点击h1 退出
      out() {
        this.$router.replace('/')
        localStorage.setItem('blogpro',0)
      },
      // 跳转到展示页面
      goShow(id) {
        console.log(id);
        this.$router.push({path:'/showacticle',query:{id:id}})
      },
      // 去 write
      goWrite() {
        this.$router.push({path:'/write'})
      },
      goAlluserActicle() {
        this.$router.push({path:'/alluseracticle'})
      },
      goContact() {
        this.$router.push({path:'/contact'})
      },
      goAdministration() {
        this.$router.push({path:'/administration'})
      },

    },
    created() {
      // 修改title
      document.title = "首页"
      // 发请求,获取个人信息 进行展示
      getUserinfo({
        userid:JSON.parse(localStorage.getItem("userinfo")).userid,
      }).then(res => {
        // console.log(res);
        this.infoname = res.data[0].username
        this.infobirthday = res.data[0].userinit
        this.imgurl = res.data[0].userimg  || this.imgurl
      })
      // 发请求 提取标签
      getUserAllActicle({phone:JSON.parse(localStorage.getItem("userinfo")).userid}).then(res => {
        this.allacticles = res.data
        // console.log(res.data);
      })
    },
}
</script>

<style scoped lang="less">
// #app {
// background-color: red !important;
// }
.index {
    position: relative;
    width: 1300px;
    // max-width: 100vw;
    height: auto;
    margin: 0  auto;
    box-sizing: border-box;
    padding-bottom: 20px;
    // background: url("../../../src/assets/imgs/indexbg.gif") repeat;
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
          color: #fff;
           text-shadow: 1.8px -0.2px 0.1px #fff,2.8px -1.2px 0.1px #fff;
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
            a {
              color: #fff;
            }
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
      width: calc(101% - 3px);
      height: 100px;
      background: #412e2e;
      // background: url("../../assets/imgs/banerbg.jpg");
      background: url("../../assets/imgs/index-ban-bg.gif") no-repeat;
      // background-size: cover;
      background-position: 970px 0;
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
      width: calc(101% - 3px);
      height: 338px;
      // background-color: #fff;
      color: #fff;
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
          width: 150px;
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
      // height: 1020px;
      height: auto;
      margin-top: -75px;
      // background-color: #f4f5f5;
      padding-top: 20px;
      padding-bottom: 20px;
      padding-right: 10px;
      // overflow: hidden;
      .index-body-left {
        width: 29%;
        // height: 200px;
        .nodate {
        text-align: center;
        height: 200px !important;
        margin-left: -60px !important;
        line-height: 200px;
      }
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
              span {
                float: right;
                margin-right: 40px;
              }
            }
          }
        }
      }
      .index-body-right {
        width: 68%;
        // height: 200px;
        div {
          margin-right: 10px;
        }
        .index-body-right-nav {
          width: 93%;
          height: 50px;
          background-color: #fff;
          padding: 0 20px;
          margin-bottom: 20px;
          .nav-item {
            display: block;
            float: left;
            width: 100px;
            height: 100%;
            text-align: center;
            line-height: 50px;
          }
        }
        .index-body-right-view {
          // background-color: #fff;
        }
      }
    }
}


</style>