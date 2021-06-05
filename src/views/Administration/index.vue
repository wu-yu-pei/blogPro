<template>
  <div class="admin">
      <div class="userinfo">
        <h4>用户信息修改:</h4>
        <div class="username">用户昵称: {{uname}} <button class="change" @click="change">修改</button></div>
        <div class="userimg">用户图像: <img :src="'http://vueshop.glbuys.com/userfiles/head/'+imgsrc" ref="img" alt=""><input @change="uploadfile" type="file" name="" id=""></div>
      </div>
      <div class="acticle">
        <h4>用户文章管理:</h4>
        <div class="allacticle">

        </div>
      </div>
  </div>
</template>

<script>
import {changeUname,changeImg} from '../../api/admin/index'
import getUserinfo from '../../api/index/index'
import axios from 'axios'
export default {
  name:'admin',
  data() {
    return {
      uname:JSON.parse(localStorage.getItem('userinfo')).username,
      id:JSON.parse(localStorage.getItem('userinfo')).userid,
      imgsrc:'236214902.gif'
    }
  },
  methods: {
    change() {
      this.$prompt('请输入昵称', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(async ({ value }) => {
          await changeUname({
            uname:value.substr(0,6),
            id:this.id
          }).then(res => {
            console.log(res,value);
            if(res.status === 200) {
              console.log(20);
              this.uname = value.substr(0,6)
              localStorage.setItem("userinfo",JSON.stringify({userid:this.id,username:value.substr(0,6)}))
            }
          })
          this.$message({
            type: 'success',
            message: '已成功修改用户名'
          });
        }).catch((err) => {
          this.$message({
            type: 'info',
            message: '修改失败'
          });
        });
    },
    update() {
      this.$message({
            type: 'info',
            message: '暂不支持该功能'
      });
    },
    uploadfile(e) {
      let file = e.target.files[0]
      let formdata = new FormData()
      formdata.append("headfile",file)
      axios.post("http://vueshop.glbuys.com/api/user/myinfo/formdatahead?token=1ec949a15fb709370f",formdata).then(res => {
        if(res.status === 200) {
          this.$refs['img'].src = "http://vueshop.glbuys.com/userfiles/head/"+ res.data.data.msbox     
          changeImg({
            uimg:res.data.data.msbox,
            id:this.id
          }).then(res => {
            if(res.status === 200) {
              this.$message({
            type: 'success',
            message: '上传成功'
          });
            }
          })
        }
      })
    }
  },
  created() {
    getUserinfo({
        userid:JSON.parse(localStorage.getItem("userinfo")).userid,
    }).then(res => {
      console.log(res.data[0].userimg);
        this.imgsrc = res.data[0].userimg  || this.imgsrc
      })
  },
}
</script>

<style scoped lang='less'>
.admin {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .userinfo {
    box-sizing: border-box;
    width:100%;
    // height: 80px;
    // background-color: red;
    padding: 10px 40px;
    // margin: 10px 0;
    .username {
      margin: 20px 40px;
     
    }
    .userimg {
      margin: 20px 40px;
      // text-align: center;
    img {
      vertical-align:middle;  
    }
    }
  }
  .acticle {
    box-sizing: border-box;
    width:100%;
    height: auto;
    // background-color: red;
    padding: 10px 40px;
    margin: 10px 0;
    .allacticle {
      display:flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 950px;
      background-color: red;
    }
  }
} 
.change {
        background-color:transparent;
        outline: none;
        padding: 2px 4px;
        letter-spacing: 3px;
        border: 1px solid #ccc;
        cursor: pointer;
      }
</style>