<template>
  <div>
      <h1>{{title}}</h1>
      <v-md-editor 
           v-model="text"
          height="800px"
          mode=""
      ></v-md-editor>
   <div class="sure" @click="sure">
        确定修改
   </div>
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
            id:this.$route.query.id
        }
    },
    methods: {
        sure() {
            changeUserInfo({
                body:this.text,
                time:`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDay()-1}`,
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
        this.title = res.data[0].acticleinfotitle
      })
    },
}
</script>

<style lang="less" scoped>
h1 {
    text-align: center;
    margin: 5px;
}
.sure {
    position: fixed;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    line-height: 25px;
    text-align:center;
    letter-spacing: 3px;
    padding: 5px;
    right: 20px;
    bottom: 30px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
}
</style>