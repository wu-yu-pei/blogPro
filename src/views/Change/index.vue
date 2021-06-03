<template>
  <div>
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
         <el-button @click="sure()">确认修改</el-button>
     </div>
    </div>
      <v-md-editor 
           v-model="text"
          height="800px"
          mode=""
      ></v-md-editor>
  </div>
</template>

<script>
import showUserActicle from '../../api/showuseracticle/index'
import changeUserInfo from '../../api/change/index'
export default {
    name:'change',
    data() {
        return {
            text:'',
            title:'',
            type:'',
            time:new Date(),
            id:this.$route.query.id,
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
        }
    },
    methods: {
        sure() {
            changeUserInfo({
                body:this.text,
                title:this.title,
                type:this.type,
                time:`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDay() - 1}`,
                id:this.id
            }).then(res => {
                if(res.data == 'ok') {
                    alert('修改成功')
                    this.$router.replace({
                        path:'/showacticle',
                        query:{
                            id:this.id
                        }
                    })
                }
            })
        }
    },
    created() {
        showUserActicle({
        phone:JSON.parse(localStorage.getItem('userinfo')).userid,
        id:this.$route.query.id
      }).then(res => {
        //   console.log(res)
        this.text = res.data[0].acticleinfobody,
        this.title = res.data[0].acticleinfotitle,
        this.type = res.data[0].acticleinfocol
      })
    },
}
</script>

<style lang="less" scoped>

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
</style>