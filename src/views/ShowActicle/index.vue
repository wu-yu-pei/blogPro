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
        <!-- <div class="show-body-left">
            <div class="show-body-left-head">
              <div class="show-body-left-head-head">

              </div>
              <div class="show-body-left-head-head">
                
              </div>
              <div class="show-body-left-head-head">
                
              </div>
            </div>
            <div class="left-title">

            </div>
            <div class="left-title">

            </div>
        </div> -->
        <div class="show-body-right">
          <div class="show-body-right-heade">
            <h2>{{time}}</h2>
            <div class="show-body-right-heade-title">
              <p>
                <span><img src="../../assets/imgs/yuanchuang.png" alt=""></span>
                <span>{{uname}}</span>
                <span>{{time}}</span>
                <img src="../../assets/imgs/yanjing.png" alt="" style="margin-left:10px">
                <span>30</span>
                <li>版权</li>
                <li @click="change" class="change">修改</li>
              </p>
              <p style="padding-left:52px;margin-top:5px">
                <span style="color:#999aaa">分类专栏</span>
                <a href="">程序</a>
                <span>文章标签</span>
                <a href="">node.js</a>
              </p>
            </div>
          </div>
          <div class="show-body-right-title">
              <h1>{{title}}</h1>
          </div>
          <v-md-editor 
           v-model="text"
          height="800px"
          mode="preview"
          ></v-md-editor>
        </div>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import showUserActicle from '../../api/showuseracticle/index'
export default {
    name:'showacticle',
    data() {
      return {
        acticle:{},
        text:'',
        time:'',
        title:'',
        id:this.$route.query.id,
        uname:JSON.parse(localStorage.getItem('userinfo')).username,
      }
    },
    components: {
    },
    computed: {
      ...mapState({
        alluseracticle: state => state.Index.allacticle
      }) 
    },
    methods: {
      go(target) {
          this.$router.push(target)
      },
      out() {
        this.$router.replace('/')
        localStorage.setItem('blogpro',0)
      },
      // 修改
      change() {
        this.$router.push({
          path:"/change",
          query:{
            id:this.id
          }
        })
      }
    },
    created() {
      // 如果此时页面刷新,数据就会丢失 所以 需要解决次问题  
      // 一 将数据储存到loaclstorage.....里面(我们采用这种方式)
      // 二 在此页面 发送请求  
      // 三 利用npm的一个包 持久化 vuex中指定的 state
      // 储存在loaclstorage里
      // if(this.alluseracticle) localStorage.setItem('acticle',this.alluseracticle.filter(item => item.acticleinfoid == this.$route.query.id)[0].acticleinfobody)
      // let acticle =localStorage.getItem("acticle") || this.alluseracticle.filter(item => item.acticleinfoid == this.$route.query.id)[0].acticleinfobody
      // let time =localStorage.getItem("acticle") || this.alluseracticle.filter(item => item.acticleinfoid == this.$route.query.id)[0].acticleinfotime
      // this.text = acticle

      // 发送请求
      console.log(this.$route.query.id);
      showUserActicle({
        phone:JSON.parse(localStorage.getItem('userinfo')).userid,
        id:this.$route.query.id
      }).then(res => {
        this.acticle = res.data[0]
        this.text = this.acticle.acticleinfobody
        this.time = this.acticle.acticleinfotime
        this.title = this.acticle.acticleinfotitle
        console.log(this.acticle);
      })
      document.title = '我的文章'
    },
}
</script>

<style scoped lang='less'>
.show {
    max-width: 100vw;
    // height: 1300px;
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
        // overflow: hidden;
        margin: 0 auto;
        
            padding: 10px 0;
        // .show-body-left {
        //     float: left;
        //     width: 20%;
        //     height: 100%;
        //     // background-color: yellow;
        //     .left-title {
        //         width: 100%;
        //         height: 200px;
        //         background-color: #fff;
        //         margin: 10px 0;
        //     }  
        // }
        .show-body-right {
            // float: right;
            width: 90%;
            // height: 90%;
            background-color: #fff;
            // margin: 10px 0;
            margin:  10px auto ;
            // padding: 20px;
            box-sizing: border-box;
            
            padding: 5px 0;
            .show-body-right-heade {
              margin-top: 15px;
              margin-left: 32px;
              h2 {
                margin-top: 20px;
              }
              .change:hover {
                color: chocolate;
              }
              .show-body-right-heade-title {
                width: 97%;
                height: 64px;
                background-color: #f5f6f7;
                margin: 10px 0;
                p {
                  overflow: hidden;
                  >span {
                    display: block;
                    float: left;
                    height: 30px;
                    line-height: 30px;
                    font-size: 14px;
                    color: #555666;
                    line-height: 30px;
                  }
                  img {
                    float: left;
                  }
                  a {
                    display: block;
                    height: 100%;
                    float: left;
                    margin: 5px 10px;
                    border: 1px solid #eaeaef;
                    color: #5094d5;
                    background-color: #fff;
                    // letter-spacing: 3px;
                    padding: 0 5px;
                    box-sizing: border-box;
                    font-size: 12px;
                  }
                  span:nth-child(2) {
                    margin-left: 20px;
                  }
                  span:nth-child(3) {
                    margin-left: 20px;
                    color: #999aaa;
                  }
                  span:nth-child(3) {
                    margin-left: 20px;
                    color: #999aaa;
                  }
                  img {
                    height: 30px;
                  }
                  li {
                    float: right;
                    color: #999aaa;
                    margin: 3px 10px;
                    font-size: 14px;
                    cursor: pointer;
                  }
                }
              }
            }
            .show-body-right-title {
              margin-top: 15px;
              margin-left: 32px;
              margin-bottom: 20px;
            }
        }
    }
}
</style>