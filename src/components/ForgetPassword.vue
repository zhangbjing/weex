<template>
  <div class="ForgetPassword">
    <header class="header">
        <text class="text"><image class="returnImg" src='/static/images/icon_back.png'></image></text>
        <text class="text">忘记密码</text>
        <text class="text"></text> 
    </header>
    <section class="main">
        <div class="main-input">
            <div class="main-userName">
                <image class="img" src='/static/images/6.png'></image>
                <input type="text" class="phone" @change='onchangPhone'>
            </div>
            <div class="main-refresh">
                <image class="img" src='/static/images/2.png'></image>
                <input type="text" ref="btns" class="phone" @change='onchangCode'>
                <button class="button" @click='clickRefresh'>点击获取 ({{num}})</button>
            </div>
            <div class="main-password">
                <image class="img" src='/static/images/icon_default_password.png'></image>
                <input type="password" @change="onchangePassword" class="phone" placeholder="请输入新的6位数字密码" maxlength='6'>
            </div>
            <div class="main-password">
                <image class="img" src='/static/images/icon_default_password.png'></image>
                <input type="password" ref='inputs' @change='onchangeNewPassword' class="phone" placeholder="请再次输入新密码" maxlength='6'>
            </div>
            <div :class="saleOff ? 'footer-on footer-btn' : 'footer-btn'">
                <button :class="disabled ? 'newPwd newPwd-bg': 'newPwd'" @click='newPassword'>{{content}}</button> 
                <!-- <wxc-button disabled = 'true'></wxc-button> -->
            </div>
        </div>
    </section>
  </div>
</template>
<script>
// import { WxcButton } from 'weex-ui'
const modal = weex.requireModule('modal')
export default {
    name: 'ForgetPassword',
    data () {
        return {
            num: 5, //倒计时
            disabled: false,
            saleOff: false,  //密码不为空变颜色
            atypism: false, //两次密码不一致
            content: '重设密码', //button内容
            type: 'bg',
            changPhone: '', //用户手机号
            changCode: '', //验证码
            changPassword: '', //密码
            changNewPassword: '', //再次输入密码
            str: ''
        }
    },
    components: {
        // WxcButton
    },
    created () {
        
    },
    methods: {
        onchangPhone (event) {
            this.changPhone = event.value
        },
        onchangCode (event) {
            this.changCode = event.value
        },
        onchangePassword (event) {
            this.changPassword = event.value
        },
        onchangeNewPassword (event) {
            this.changNewPassword = event.value;
        },
        clickRefresh (e) {
            const { type, disabled } = e;
            let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if(!reg.test(this.changPhone) || this.changPhone.length < 1) {
                modal.toast({
                    message: '手机号不能为空' 
                })
            } else {
                for(let i = 0; i < 4; i++) {
                    this.str += Math.floor(Math.random()*10)
                }
                this.content = '已发送';
                this.disabled = true;
                alert('已发送手机验证码' + this.str)
                let timer = setInterval(() => {
                    this.num--;
                    if (this.num <= 0) {
                        clearInterval(timer);
                        this.num = 5;
                        this.disabled = false;
                        this.content = '重设密码';
                    }
                }, 1000)
            }
        },
        newPassword () {
            if (this.changPhone !== '' && this.changCode !== '' && this.changPassword !== '' && this.changNewPassword !== ''){
                if (this.changCode.length !== '' || this.changCode === this.src) {
                    if (this.changNewPassword.length !== ''){
                        this.saleOff = true;
                        if (this.changPassword !== this.changNewPassword) {
                            this.content = '两次密码输入不一致'
                            this.disabled = true
                        } else {
                            this.content = '密码设置成功'
                        }
                    }
                } else {
                    alert('请输入正确验证码')
                }
            } else {
                modal.toast({
                    message: '内容不能为空' 
                })
            }
            
        }
    }
}
</script>

<style lang="less" scoped>
    .ForgetPassword{
        width: 100%;
        height: 100%;
        .header{
            width: 100%;
            height: 100px;
            background: #02b3ed;
            flex-direction: row;
            .text{
                flex:1;
                height: 100%;
                color: rgb(255, 255, 255);
                display: -webkit-flex;
                justify-content: center;
                align-items: center;
                &:nth-child(1){
                    width: 100%;
                    height: 100%;
                    direction: -webkit-flex;
                    justify-content: center;
                    align-items: center;
                    .returnImg{
                        width: 50px;
                        height: 50px;
                    }
                }
                &:nth-child(2){
                    flex:5;
                    font-size: 40px;
                }
            }
        }
        .main{
            flex:1;
            width: 100%;
            overflow: hidden;
            .main-input{
                width: 90%;
                height: auto;
                margin: 0 auto;
                .main-userName{
                    flex-direction: row;
                    width: 100%;
                    height: auto;
                    border-bottom: 1px solid rgb(212, 212, 212);
                    margin-top: 40px;
                    padding-bottom: 20px;
                    .img{
                        width: 50px;
                        height: 62px;
                        margin-left: 20px;
                    }
                    .phone{
                        margin-left: 30px;
                        outline: none;
                        font-size: 34px;
                    }
                }
                .main-refresh{
                    flex-direction: row;
                    width: 100%;
                    height: auto;
                    border-bottom: 1px solid rgb(212, 212, 212);
                    margin-top: 40px;
                    padding-bottom: 20px;
                    .img{
                        width: 55px;
                        height: 55px;
                        margin-left: 20px;
                    }
                    .phone{
                        width: 45%;
                        margin-left: 30px;
                        outline: none;
                        font-size: 34px;
                    }
                    .button{
                        width: 45%;
                        height: 60px;
                        background: #02b3ed;
                        color: rgb(255, 255, 255);
                        border-radius: 5px;
                        text-align: center;
                        font-size: 28px;
                        outline: none;
                    }
                }
                .main-password{
                    flex-direction: row;
                    width: 100%;
                    height: auto;
                    border-bottom: 1px solid rgb(212, 212, 212);
                    margin-top: 40px;
                    padding-bottom: 20px;
                    .img{
                        width: 50px;
                        height: 62px;
                        margin-left: 20px;
                    }
                    .phone{
                        margin-left: 30px;
                        outline: none;
                        font-size: 30px;
                        color: rgb(170, 170, 170)
                    }
                }
                .footer-btn{
                    width: 100%;
                    height: 100px;
                    border-radius: 5px;
                    margin-top: 60px;
                    background: #AAAAAA;
                    display: -webkit-flex;
                    justify-content: center;
                    align-items: center;
                    .newPwd{
                        width: 320px;
                        height: 70px;
                        color: rgb(255, 255, 255);
                        text-align: center;
                        font-size: 32px;
                        border-radius: 50px;
                        outline: none;
                        background: #AAAAAA;
                    }
                    .newPwd-bg{
                        background: #666666;
                    }
                }
                .footer-on{
                    background: #02b3ed;
                    .newPwd{
                       background: #02b3ed; 
                    }
                    .newPwd-bg{
                        background: #666666;
                    }
                }
            }
        }
    }
</style>

