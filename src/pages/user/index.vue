<template>
    <main v-swipeleft = 'back' v-swiperight = 'forward'>
        <div class="topbox" v-if='userInfo'>
            <div class="imgbox">
                <img :src="userInfo.pic" alt="">
            </div>
            <div class="right">
                <span> {{userInfo.username}} </span>
                <dt to="/login" @click="loginOut">退出</dt>
            </div>

        </div>

        <div class="topbox" v-else>
            <div class="left">
                <van-icon name="manager-o" />
            </div>
            <div class="right">
                <router-link tag="span" to="/login">登录 </router-link>
                <span>/</span>
                <router-link tag="span" to="/registry"> 注册</router-link>
            </div>
        </div>
    </main>
    
</template>

<script>
// import {mapState,mapActions} from 'vuex'
import {getCookie,setCookie} from 'Utils/cookie.js'
export default {
   
   computed: {
       userInfo(){
           return{
               pic:getCookie('avatar'),
               username:getCookie('username')
           }
       }
   },
   methods: {
       loginOut(){
        //    setCookie('avatar','',-1)
           setCookie('userId','',-1)
        //    setCookie('username','',-1)
           setCookie('token','',-1)
           this.$router.push('/login')
       }
   },

}
</script>
<style lang="scss" scoped>
    main{
        width: 100vw;
        height: 100vh;
        flex: 1;
    }
    .topbox{
            display: flex;
            justify-content: space-around;
            width: 100vw;
            height: 200px;
            background: rgb(245, 108, 66);
            padding: 50px 70px 0 20px;
            .left{
                width: 80px;
                height: 80px;
                border: 1px solid #999;
                border-radius: 100%;
                background: white;
                text-align: center;
            }
            .right{
                width: 100px;
                height: 50px;
                // background: red;
            }
            .van-icon {
                font-size: 60px;
                // color: white;
            }
            span{
                font-size: 18px;
                color: white;
                // margin-bottom: 20px;
            }
            .imgbox{
                width: 80px;
                height: 80px;
                border: 1px solid #999;
                border-radius: 100%;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            dt{
                color: rgb(22, 122, 216);
                margin-top: 10px;
                font-size: 12px;
                
            }
        }
</style>