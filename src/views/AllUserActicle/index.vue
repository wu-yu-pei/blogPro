<template>
  <div class="allusersacticle">
    <div class="allusersacticle-left">
      <h1 title="退出" @click="out">Blog</h1>
      <ul>
        <li><a @click="getqianduan">前端</a></li>
        <li><a @click="gethouduan">后端</a></li>
        <li><a @click="getjava">java</a></li>
        <li><a @click="getvue">Vue</a></li>
        <li><a @click="getjs">JavaScript</a></li>
        <li><a @click="gethtml">HTML</a></li>
        <li><a @click="getcss">CSS</a></li>
        <li><a @click="getnode">node.js</a></li>
        <li><a @click="getreact">React</a></li>
        <li><a @click="getcc">C++</a></li>
      </ul>
    </div>
    <div class="allusersacticle-right">
        <div  v-if="currentacticle.length === 0">
          <i class="el-icon-loading" style="font-size:50px"></i>
        </div>
        <template v-else>
        <IndexShowItem v-for="item in currentacticle" 
        :key="item.acticleinfoid" 
        :id="item.acticleinfoid" 
        :title="item.acticleinfotitle"
        :body="item.acticleinfobody"
        :likecount="item.acticleinfolikecount"
        :readcount="item.acticleinforeadcount"
        :type="item.acticleinfocol"></IndexShowItem>
        </template>
      <el-pagination
      class="pagination"
      layout="prev, pager, next"
      @next-click="next"
      @prev-click="pre"
      @current-change="current"
      :page-size=pagesize
      :total=total>
      </el-pagination>
    </div>
  </div>
</template>

<script>
import getAllUserActicle from "../../api/alluseracticle/index"
import IndexShowItem from "../../components/IndexShowItem/index"
import {getqianduan,gethouduan,getvue,getreact,getcss,gethtml,getjava,getnode,getc,getjavascript} from "../../api/indexclassify/index"
export default {
    name:'alluseracticle',
    data() {
      return {
        isloading:true,
        alluseracticle:[],
        currentacticle:[],
        pagesize:6
      }
    },
    methods: {
      next(page) {
        this.currentacticle = this.alluseracticle.slice(this.pagesize*(page - 1),this.pagesize*page)
      },
      pre(page) {
        this.currentacticle = this.alluseracticle.slice(this.pagesize*(page - 1),this.pagesize*page)
      },
      current(page) {
        this.currentacticle = this.alluseracticle.slice(this.pagesize*(page - 1),this.pagesize*page)
      },
      // 退出
      out() {
        this.$router.replace('/')
        localStorage.setItem('blogpro',0)
      },
      // 封装一个函数 让每一次请求的数据可以直接用于分页
      hasclassify(data){
          this.alluseracticle = data
          this.currentacticle=[...this.alluseracticle].splice(0,this.pagesize)
      },
      // 发送分类请求
      getjs() {
        getjavascript().then(res => {
          if(res.status === 200) {
            this.hasclassify(res.data)
          }
        })
      },
      getqianduan() {
        getqianduan().then(res => {
          if(res.status === 200) {
            this.hasclassify(res.data)
          }
        })
      },
      gethouduan() {
        gethouduan().then(res => {
          if(res.status === 200) {
            this.hasclassify(res.data)
          }
        })
      },
      getjava() {
        getjava().then(res => {
          if(res.status === 200) {
            this.hasclassify(res.data)
          }
        })
      },
      getnode() {
        getnode().then(res => {
          if(res.status === 200) {
            this.hasclassify(res.data)
          }
        })
      },
      gethtml() {
        gethtml().then(res => {
          if(res.status === 200) {
            this.hasclassify(res.data)
          }
        })
      },
      getcc() {
        getc().then(res => {
          if(res.status === 200) {
            this.hasclassify(res.data)
          }
        })
      },
      getcss() {
        getcss().then(res => {
          if(res.status === 200) {
            this.hasclassify(res.data)
          }
        })
      },
      getvue() {
        getvue().then(res => {
          if(res.status === 200) {
            this.hasclassify(res.data)
          }
        })
      },
      getreact() {
        getreact().then(res => {
          if(res.status === 200) {
            this.hasclassify(res.data)
          }
        })
      }
    },
    computed: {
      total() {
        return this.alluseracticle.length
      }
    },
   components: {
     IndexShowItem
   },
    created() {
      getAllUserActicle().then(res => {
          this.alluseracticle = res.data
          this.currentacticle=[...this.alluseracticle].splice(0,this.pagesize)
      })
    },
}
</script>

<style lang='less' scoped>
.allusersacticle {
  width: 100vw;
  min-width: 1536px;
  height: 100vh;
  padding: 0px 30px;
  box-sizing: border-box;
  color: #fff;
  .allusersacticle-left {
    float: left;
    width:15%;
    height: 100vh;
    h1 {
      margin-top: 20px;
      // text-align: center;
      cursor: pointer;
    }
    ul {
      margin-top: 40px;
      li {
         width: 100%;
        height: 46px;
        // text-align: center;
        line-height: 46px;
        // background-color: blue;
        margin: 15px 0;
        a {
          display: block;
          width: 100px;
          text-align: center;
          color:#fff;
        }
        a:hover {
          color:#000;
          background-color: #fff;
          border-radius: 8px;
        }
      }
      li:nth-child(1){
        a:nth-child(1) {
         margin-left: 10px; 
        }
      }
      li:nth-child(2){
        a:nth-child(1) {
         margin-left: 50px; 
        }
      }
      li:nth-child(3){
        a:nth-child(1) {
         margin-left: 100px; 
        }
      }
      li:nth-child(4){
        a:nth-child(1) {
         margin-left: 150px; 
        }
      }
      li:nth-child(5){
        a:nth-child(1) {
         margin-left: 180px; 
        }
      }
      li:nth-child(6){
        a:nth-child(1) {
         margin-left: 180px; 
        }
      }
      li:nth-child(7){
        a:nth-child(1) {
         margin-left: 150px; 
        }
      }
      li:nth-child(8){
        a:nth-child(1) {
         margin-left: 100px; 
        }
      }
      li:nth-child(9){
        a:nth-child(1) {
         margin-left: 50px; 
        }
      }
      li:nth-child(10){
        a:nth-child(1) {
         margin-left: 10px; 
        }
      }

    }
    // background-color: #fff;
  }
  .allusersacticle-right {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    position: relative;
    float: right;
    width: 80%;
    height: calc(100vh - 70px);
    background-color: transparent;
    padding: 20px 15px;
    box-sizing: border-box;
     .pagination {
        position: absolute;
        bottom: -50px;
        right: 50%;
        transform: translateX(50%);
        border-radius: 8px;
      }
  }
}
.el-pagination {
  background: #fff  !important;
}
</style>