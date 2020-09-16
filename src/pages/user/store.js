import {loginReq,picReq,regReq} from 'Api/index'
import {setCookie} from 'Utils/cookie'
import router from 'Router'
import {Toast} from 'vant'
import md5 from 'md5'
export default{
    namespaced: true,
    state:{
        logindata:{},
        pic:'',
        regdata:{}
    },
     actions: {
    //    async login({commit},payload){ //login被上一个文件调用
    //        commit({
    //            type:"LOGIN",
    //            payload:await loginReq(payload) //loginReq是调用的api中封装好的接口，而api中封装好的接口又是依赖于utils中封装的请求函数
    //        })
    //    },
       async getPic({commit},payload){
           commit({
               type:"GET_PIC",
               payload:await picReq(payload)
           })
       },
       async register({commit},{username,phone,password}){//组件中传递过来的数据是一个value数组，所以需要解构
            setCookie('username',username,7)
            commit({
               type:"REGISTERY",
               payload: await regReq({
                   username,phone,password:md5(password)
               }) 
            })
        },
        async loginPage({commit},{username,password}){
            commit({
                type:'LOGIN_REQ',
                payload:await loginReq({username,password:md5(password)})
            })
        }
    },
    mutations: {
        // LOGIN(state,{payload}){
        //     state.logindata=payload
        // },
        GET_PIC(state,{payload}){
            state.pic  = 'http://elm.cangdu.org/img/' + payload.data.image_path
            // console.log(payload.data.image_path);
            setCookie('avatar',state.pic,7)
        },
        REGISTERY(state,{payload}){
            if(payload.data.status==1){
                router.push('/login')
            }
            if(payload.data.status==0){
                Toast.fail(payload.data.msg)
            }
            state.regdata = payload
        },
        LOGIN_REQ(state,{payload}){
            if(payload.data.status==1){
                setCookie("userId",payload.data.userId,7),
                setCookie('token',payload.data.token,7)
                router.push('/user')
            }
            if(payload.data.staus==0){
                Toast.fail(payload.data.msg)
            }
            state.logindata = payload
            console.log(payload);
        }
    }
}