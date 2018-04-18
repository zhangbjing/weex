<template>
  <div class="loading">
    <div class="logo">
      <image class="title-logo" src="/static/images/login_page_logo.png" alt=""></image>
    </div>
    <div class="main">
      <form action="phone" class="phone">
        <label for="phone">
          <image class="phone-logo" src='/static/images/icon_default_call.png'></image>
          <input type="text" @change="onchangeUserNumber" value=""/>
        </label>
      </form>
      <form action="password" class="password">
        <label for="password">
          <image class="password-logo" src='/static/images/icon_default_password.png'></image>
          <input type="password" value="" @change="onchangeUserPassword"/>
        </label>
      </form>
      <div class="login">
        <text class="logo-btn" style="background-image: url(/static/images/圆角矩形4.png)" @click='clicked'>登录</text>
      </div>
      <a href="javascript:;" class="text-content">
        <text class="text" @click='ForgetPassword("forgetPassword.js")'>忘记密码？</text>
      </a>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  // const navigator = weex.requireModule('navigator')
  // const modal = weex.requireModule('modal')
  import util from '../util/index.js'
  export default {
    name: 'Login',
    data () {
      return {
        userPhone: '',
        userPassword: ''
      }
    },
    created () {
      
    },
    methods: {
      onchangeUserNumber (event) {
        this.userPhone = event.value;
      },
      onchangeUserPassword (event) {
        this.userPassword = event.value;
      },
      clicked () {
        const modal = weex.requireModule('modal')
        let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if ( !reg.test(this.userPhone) || this.userPassword.length < 1 || this.userPhone.length < 1) {
          modal.toast({
              message: '请输入正确的手机号!' 
          })
        } else {
          axios({
            url: '/',
            method: 'GET',
            params: {
              userPhone: this.userPhone,
              userPassword: this.userPassword
            }
          }).then((res) => {
            console.log(res)
            if (res.status === 200) {
              router.push('promptNew')
            }
          })
        }
      },
      ForgetPassword (path) {
        if(!path) return;
        const navigator = weex.requireModule('navigator')
        var url = this.$getConfig().bundleUrl;
        url = url.split('/').slice(0, -1).join('/') + '/dist/page/components/' + path
        console.log(url)
        // console.log(util.setBundleUrl(url, 'web/preview.html?page=' + path))
        navigator.push({    //web/preview.html?page=index.js
          url: url,
          animated: "true"
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  
  .loading{
    width: 100%;
    height: 100%;
  }
  .logo{
    width: 100%;
    padding-top: 200px;
    display: -webkit-flex;
    align-items: center;
    .title-logo{
      width: 190px;
      height: 190px;
    }
  }
  .main{
    padding:0 35px;
    height: auto;
    margin-top: 100px;
    .phone{
      width: 100%;
      padding-bottom: 20px;
      border-bottom: 1px solid #cccccc;
      margin-bottom: 50px;
      label{
        width: 100%;
        display: -webkit-flex;
        .phone-logo{
          margin-left: 20px;
          width: 45px;
          height: 55px;
        }
        input{
          outline: none;
          margin-left: 40px;
          font-size: 33px;
          color: rgb(102, 102, 102)
        }
      }
    }
    .password{
      width: 100%;
      padding-bottom: 20px;
      border-bottom: 1px solid #cccccc;
      label{
        width: 100%;
        display: -webkit-flex;
        .password-logo{
          margin-left: 20px;
          width: 45px;
          height: 55px;
        }
        input{
          outline: none;
          margin-left: 40px;
          font-size: 43px;
          color: rgb(51, 51, 51)
        }
      }
    }
    .login{
      width: 100%;
      height: 100px;
      margin-top: 80px;
      .logo-btn{
        width: 100%;
        height: 100%;
        outline: none;
        border-radius: 15px;
        background-size: 100%;
        display: -webkit-flex;
        justify-content: center;
        align-items: center;
        font-size: 39px;
        color: rgb(255, 255, 255)
      }
    }
    .text-content{
      width: 100%;
      height: 80px;
      display: -webkit-flex;
      justify-content: center;
      align-items: flex-start;
      .text{
        display: block;
        display: -webkit-flex;
        justify-content: center;
        align-items: flex-start;
        color: rgb(102, 102, 102);
        font-style: 28px;
      }
    }
  }
</style>
