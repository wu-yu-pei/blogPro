<template>
  <div class="allusersacticle">
    <div class="allusersacticle-left">
      <h1 title="退出" @click="out">Blog</h1>
      <ul>
        <li><a>前端</a></li>
        <li><a>后端</a></li>
        <li><a>Java</a></li>
        <li><a>Vue</a></li>
        <li><a>JavaScript</a></li>
        <li><a>HTML</a></li>
        <li><a>CSS</a></li>
        <li><a>Node.js</a></li>
        <li><a>C</a></li>
        <li><a>C++</a></li>
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
export default {
    name:'alluseracticle',
    data() {
      return {
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