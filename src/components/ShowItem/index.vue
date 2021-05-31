<template>
  <div class="show-item">
    <div class="show-item-title">
        {{time}}
    </div>
    <div class="show-item-body">
       {{body.substr(0,300)}}
    </div>
    <div class="show-item-lable">
        <span>原创</span>
        <span><i class="el-icon-notebook-2"></i>{{readcount}}阅读</span>
        <span><i class="el-icon-chat-dot-round"></i>{{commencount}}评论</span>
        <span><i class="el-icon-star-off"></i>{{likecount}}点赞</span>
        <span>发布blog于{{time.substr(5,2)}}月前</span>
    </div>
  </div>
</template>

<script>
export default {
    name:'showitem',
    props: {
        time:{
            type:String,
            default:'2020-12-20'
        },
        body:{
            type:String,
            default:'...'
        },
        readcount:{
            type:String,
            default:"0"
        },
        commencount:{
            type:Number,
            default:0
        },
        likecount: {
            type:String,
            default:"0"
        }
    }
}
</script>

<style scoped lang="less">
.show-item {
    width: 100%;
    min-height: 133px;
    max-height: 178px;
    background-color: #fff;
    padding: 16px;
    box-sizing: border-box;
    cursor: pointer;
    margin: 15px 0;
    .show-item-title {
        width: 100%;
        height: 24px;
        font-size: 18px;
        margin-bottom: 5px;
    }
    .show-item-body {
        position: relative;
        width: 100%;
        min-height: 70px;
        max-height: 80px;
        font-size: 14px;
        line-height: 25px;
        overflow: hidden;
    }
    .show-item-lable {
        width: 100%;
        height: 24px;
        margin-top: 10px;
        span:nth-child(1) {
            padding: 2px;
            color: #e33e33;
            text-align: center;
            letter-spacing: 3px;
            font-size: 12px;
            background: rgba(227,62,51,.1);
            margin-right: 20px;
        }
        span:nth-child(2) {
            margin-left: 40px;
            letter-spacing: 1px;
        }
        span:nth-child(3) {
            margin-left: 40px;
            letter-spacing: 1px;
        }
        span:nth-child(4) {
            margin-left: 40px;
            letter-spacing: 1px;
        }
        span:nth-child(5) {
            letter-spacing: 2px;
            float: right;
        }
    }
}
// .show-item-body::after {
//     position: absolute;
//     display: block;
//     content: ". . . . .";
//     text-align: center;
//     line-height: 25 px;
//     width: 50px;
//     height: 35px;
//     background-color: #fff;
//     bottom: 0;
//     right: 0;
// }
</style>