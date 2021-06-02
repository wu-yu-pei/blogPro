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
        time:'',
        options: [{
          value: 'JavaScript',
          label: 'JavaScript'
        }, {
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'VUE',
          label: 'VUE'
        }, {
          value: 'REACT',
          label: 'REACT'
        },{
          value: 'JAVA',
          label: 'JAVA'
        },{
          value: 'NODE',
          label: 'NODE'
        },{
          value: 'C++',
          label: 'C++'
        }],
        
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
                WriteBlog({
                phone:this.phone,
                id:this.id
                }).then(res => {
                    console.log(res);
                    WriteBloginfo({
                    id:this.id,
                    title:this.title,
                    time:this.time.slice(0,10),
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