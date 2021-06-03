<template>
    <div class="item">
      <div class="item-title">
        <span>{{title}}</span>
        <span>{{type}}</span>
      </div>
      <div class="item-body">
        <a @click="goshow">
          {{body.substr(0,100)}}
        </a>
      </div>
      <div class="item-footr">
        <!-- <a href=""><span>{{likecount}}点赞<i class="el-icon-position"></i></span></a> -->
        <button @click="like()" :disabled="isdisable">{{thelikecount}}点赞<i class="el-icon-position"></i></button>
        <a href=""><span>{{readcount}}评论<i class="el-icon-chat-dot-square"></i></span></a>
        <!-- <button>{{readcount}}评论<i class="el-icon-chat-dot-square"></i></button> -->
      </div>
    </div>
</template>

<script>
import {getlikecount,setlikecount} from '../../api/like/index'
export default {
  nama:'alluseracticle',
  data() {
    return {
      thelikecount:this.likecount,
      isdisable:false
    }
  },
  props: {
    // 文章id
    id: {
      type:String,
      default:''
    },
    title: {
      type:String,
      default:''
    },
    body: {
      type:String,
      default:''
    },
    likecount: {
      type:String,
      default:''
    },
    readcount: {
      type:String,
      default:''
    },
    type: {
      type:String,
      default:''
    }
  },
  methods: {
    goshow() {
        this.$router.push({path:'/showacticle',query:{id:this.id}})
    },
    // 点赞
    like() {
      getlikecount({
        id:this.id
      }).then(res => {
        console.log(res);
        this.thelikecount= this.thelikecount*1 + 1
        this.isdisable = true
        setlikecount({
          id:this.id,
          count:res.data[0].acticleinfolikecount*1 +1
        })
      })
    }
  },
  created() {
    console.log(this.thelikecount);
  },
}
</script>

<style lang="less" scoped>
.item {
      display: flex;
      flex-wrap: wrap;
      width: 45%;
      height: 30%;
      align-content: space-between;
      background-color: #fff;
      opacity: .5;
      color: #000;
      margin: 6px 20px;
      border-radius: 10px;
      .item-title {
        width: 100%;
        height: 20%;
        padding: 5px 15px;
        box-sizing: border-box;
        // background-color: red;
        span:nth-child(1) {
          float: left;
          font-weight: 600;
        }
        span:nth-child(2) {
          float: right;
          font-size: 14px;
        }
      }
      .item-body {
        width: 100%;
        height: 55%;
        padding: 5px 15px;
        box-sizing: border-box;
        letter-spacing: 1px;
        line-height: 30px;
      }
      .item-footr {
        width: 100%;
        height: 20%;
        padding: 5px 15px;
        box-sizing: border-box;
        // a:nth-child(1) {
        //    letter-spacing: 1px;
        //    font-size: 12px;
        // }
        a:nth-child(2) {
          letter-spacing: 1px;
          font-size: 12px;
          margin: 0 30px;
        }
        button:nth-child(1) {
          letter-spacing: 1px;
           font-size: 12px;
           border: none;
           outline: none;
           font-size: 12px;
           background-color: transparent;
        }
        button:nth-child(1):active {
          background-color: #000;
          color: #fff;
        }
        // button:nth-child(2) {
        //   letter-spacing: 1px;
        //    font-size: 12px;
        //    border: none;
        //    outline: none;
        //    font-size: 12px;
        //    background-color: transparent;
        //   margin: 0 30px;
        // }
      }
}
</style>