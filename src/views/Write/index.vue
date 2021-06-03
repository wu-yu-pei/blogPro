<template>
  <div class="write">
    <div class="write-head">
        <div class="write-head-title">
            <el-input
            type="text"
            placeholder="文章标题"
            v-model="title"
            maxlength="10"
            show-word-limit
            />
        </div>
        <div class="write-head-calssfily">
               <el-select v-model="type" placeholder="请选择文章标签">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                 </el-select>
        </div>
        <div class="write-head-time">
            <div class="block">
                <el-date-picker
                v-model="time"
                type="date"
                placeholder="选择日期"
                readonly=true
                >
                </el-date-picker>
            </div>
        </div>
     <div>
         <el-button @click="sure()">确认发布</el-button>
     </div>
    </div>
    <div class="write-body">
         <v-md-editor 
           v-model="text"
          height="630px"
          ></v-md-editor>
    </div>
  </div>
</template>

<script>
import {WriteBlog,WriteBloginfo} from '../../api/write/index'
import {nanoid} from 'nanoid';
export default {
    name:'write',
    data() {
        return {
        id:nanoid(),
        phone:JSON.parse(localStorage.getItem('userinfo')).userid,
        title:'',
        text:'',
        type: '',
        time:new Date(),
        options: [{
          value: 'JavaScript',
          label: 'JavaScript'
        }, {
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'Css',
          label: 'Css'
        }, {
          value: 'Vue',
          label: 'Vue'
        }, {
          value: 'React',
          label: 'React'
        },{
          value: 'java',
          label: 'java'
        },{
          value: 'node,js',
          label: 'node.js'
        },{
          value: 'C++',
          label: 'C++'
        }],
        isSure:false
      }
    },
    methods: {
         sure() {
            if(this.title == "" || this.time == "" || this.type == "") {
                alert('请输入完整信息')
            }else if(this.text == "" || this.text.trim() == "") {
                alert('内容不能为空')
            }else {
                // 这里可以使用 async 和 await 防止回调地狱
                this.isSure = true
                WriteBlog({
                phone:this.phone,
                id:this.id
                }).then(res => {
                    WriteBloginfo({
                    id:this.id,
                    title:this.title,
                    time:`${this.time.getFullYear()}-${this.time.getMonth()+1}-${this.time.getDay() - 1}`,
                    body:this.text,
                    readcount:"0",
                    likecount:'0',
                    type:this.type
                }).then(res => {
                    if(res.data = 'ok') {
                        alert('提交成功')
                        this.$router.replace('/index')
                    }
                })
                })
            }
        }
    },
    created() {
      document.title = "创作中心"
    },
    beforeRouteLeave (to, from, next) {
       if(!this.isSure) {
         if(confirm("请确保你已经点击确认发布,否则我不会为你保存数据")) {
          next()
         }
       }else {
         next()
       }
    }
}
</script>

<style lang="less" scoped>
.write {
    background-color: #fff;
    .write-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: calc(100% - 20px);
        height: 40px;
        padding: 20px 10px;
        .write-head-title {
            width: 400px;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>