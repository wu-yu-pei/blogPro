<template>
  <div class="logon">
      <div class="login-form">
        <h2>登录</h2>
        <div>
            <i class="el-icon-user"></i>
            <input type="text" name="" id="" v-model="userid" placeholder="手机号">
        </div>
        <div> 
            <i class="el-icon-lock"></i>
            <input type="password" name="" id="" v-model="password" placeholder="密码">
        </div>
        <div>
            <button  class="mask" @click="logon">GO</button>
        </div>
      </div>
      <div class="login-to-logon">
          <p>
            没有账号?
            <router-link to="/login" style="color:#fff">去注册</router-link>
          </p>
      </div>
  </div>
</template>

<script>
import {ref} from "vue"
import getUsers from '../../api/logon/index'
export default {
    name:'logon',
    setup(props) {
        let userid = ref('')
        let password = ref('')

        return {
            userid,
            password
        }
    },
    methods: {
        // 登录
        logon() {
            if(this.userid == "" || this.password == "" || isNaN(Number(this.userid))) {
                alert('请正确输入你的账号或密码')
            }else {
                getUsers({userid:this.userid,password:this.password}).then(res => {
                    if(res.data.length === 1) {
                        this.$router.push('/index')
                        // 标识 是否登录过
                        console.log(this.userid);
                        localStorage.setItem(`${this.userid}`,1)
                        localStorage.setItem("blogpro",1)
                        this.userid = ""
                        this.password = ""
                    }else {
                        alert('你输入的账号或密码有误')
                    }
                })
            }
            
        },
        // 判断是否是Enter并进行跳转
        go(e) {
            if(e.code == "Enter") {
                this.logon()
            }
        }
    },
    created() {
        //修改title
        document.title = this.$route.meta.title
        // if(localStorage.getItem('blopro') !== 1) {
        //     this.$router.push('/')
        // }
        document.addEventListener('keypress',this.go)
    },
    beforeUnmount() {
        document.removeEventListener('keypress',this.go)
    },
}
</script>

<style scoped lang="less">
.logon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width: 100vw;
    height: 100vh;
    /* background-color: red; */
    background: url('../../assets/imgs/lonin-bg.jpg');
    background-size: cover;
    filter: brightness(80%);
    .login-form {
        width: 500px;
        height: 400px;
        padding: 20px;
        box-sizing: border-box;
        background-color: #e1e090;
        border-radius: 8px;
        // filter:blur(0px);
        opacity: 0.6;
        h2 {
            text-align: center;
            letter-spacing: 10px;
            margin: 15px;
        }
        div {
            margin: 50px 0;
            text-align: center;
            i {
                margin-left: -10px;
            }
        }
        input {
            width: 50%;
            height: 35px;
            background: transparent;
            outline: none;
            letter-spacing: 4px;
            text-align: center;
            border: 1px solid rgb(63, 7, 7);
            border-top: none;
            border-left: none;
            border-right: none;
        }
        .mask {
            border: none;
            outline: none;
            background-color:#e1e090;
            font-size: 20px;
            letter-spacing: 7px;
            cursor: pointer;
        }
        .mask {
            width: 100px;
            position: relative;
            overflow: hidden;
            border-radius: 9px;
        }
        .mask::after{
            position: absolute;
            content: "";
            display: block;
            width: 60px;
            height: 15px;
            top: 0;
            left: 0;
            background-color: #000;
            opacity: 0.5;
            transform: rotate(124deg);
            animation: move 5s  ease-in-out infinite;
        }
        .mask:active {
            border: 1px solid #000;
        }
        @keyframes move {
            from{
                left: -100%;
            }
            to{
                left: 100%;
            }
        }
    }
    .login-to-logon {
        width: 500px;
        margin-top: 8px;
        p {
            text-align: center;
            letter-spacing: 3px;
            color: #fff;
        }
    }
}
</style>