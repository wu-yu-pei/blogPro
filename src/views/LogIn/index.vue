<template>
  <div class="logon">
      <div class="login-form">
        <h2>注册</h2>
        <div>
            <el-input placeholder="手机号码"
                    style="width:400px;margin-left:25px;background:transparent"
                    prefix-icon="el-icon-user"
                    v-model="phone"
                    >
            </el-input>
        </div>
        <div> 
            <ElInput placeholder="验证码"
                    style="width:270px;margin-left:25px"
                    prefix-icon="el-icon-document"
                    v-model="check"
                   > 
            </ElInput>
            <el-button size='small' @click="send" style="height:40px;margin:8px 0px 0 40px" :disabled="canClick">获取验证码</el-button>
        </div>
        <div> 
            <ElInput placeholder="密码(6-12位数字,字母,下划线)"
                    style="width:400px;margin-left:25px"
                    prefix-icon="el-icon-lock"
                    v-model="password"
                    show-password
                    >

            </ElInput>
        </div>
         <div> 
             <ElInput placeholder="密码(6-12位数字,字母,下划线)"
                     show-password
                    style="width:400px;margin-left:25px"
                    prefix-icon="el-icon-lock"
                    v-model="repassword"
                    >

             </ElInput>
        </div>
        <div class="to-login">
            <el-button @click="login">注册</el-button>
        </div>
      </div>
      <div class="login-to-logon">
          <p>
            已有账号?
            <router-link to="/logon" style="color:#fff">去登录</router-link>
          </p>
      </div>
  </div>
</template>

<script>
import {ref,reactive,ToRefs, toRefs} from 'vue'
import setUser from '../../api/login/index'
export default {
    name:'logon',
   
        setup(props) {
        const phone = ref('')
        const check = ref('')
        const password = ref('')
        const repassword = ref('')

        return {
            phone,
            check,
            password,
            repassword,
        }
    },
    data() {
        return {
            canClick:false,
            time:10
        }
    },
    methods: {
        // 发送给验证码
        send(e) {
            this.canClick = true
            // 注意这里是 箭头函数 不然拿不到 this
            let timer = setInterval(()=> {
                this.time--
                e.target.innerText = `剩下${this.time}秒`
                if(this.time<=0) {
                    clearInterval(timer)
                    this.canClick = false
                }
            },1000)
        },
        // 注册
        login() {
            if(this.phone == "" || this.check == "" || this.password == "" || this.repassword == "") {
                alert("信息不全!")
            }else if(!/^1[345678]\d{9}$/.test(this.phone)) {
                alert("手机号错误")
            }else if(this.password !== this.repassword) {
                alert("两次密码不一致")
            }else if(!/^[\w]{6,12}$/.test(this.password)) {
                alert("密码格式错误")
            } else {
                setUser({userid:this.phone,password:this.password,username:'blogPro',userinit:`${+new Date().getFullYear()}-${+new Date().getMonth()+1}-${+new Date().getDate()}`}).then(res => {
                    // console.log(res)
                    if(res.data === true) {
                        alert('注册成功')
                        this.$router.push('/logon')
                    }
                    if(res.data === false) {
                        alert('用户名重复')
                    }
                })
            }
            this.clear()
        },
        // 清空双向绑定
        clear() {
            this.phone = ""
            this.check = ""
            this.password = ""
            this.repassword = ""
        }

    },
    created() {
        document.title = this.$route.meta.title
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
        opacity: 1;
        opacity: 0.9;
        h2 {
            text-align: center;
            letter-spacing: 10px;
            margin: 15px;
        }
        div {
            display: flex;
            margin: 5px 0px;
            text-align: center;
            box-sizing: border-box;
            margin: 8px 0;
        }
        .to-login {
            padding: 0 195px;
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