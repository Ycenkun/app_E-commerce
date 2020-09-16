//提前完成数据请求封装
import request from 'Utils/request'
import {loginURL,cateURL,addCartURL,getCartURL,delCartURL,picURL,registerURL,tokenURL,getUserURL,movieURL,moreMovieURL} from './url'
import {getCookie} from 'Utils/cookie'
const token = getCookie('token')
const userId = getCookie('token')
export function loginReq(data){//数据请求封装
    return request({  //执行utils中的封装的request函数，并将结果返回
        url: loginURL,
        data,
        method:'post',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        }
    })
}

// 分类请求
export function categoryReq(){
    return request({
        url:cateURL,
        data:{
            r: 'class/category',
            type: 1
        }
    })
}
//列表请求
export function listReq(data){
    return request({
        url:cateURL,
        data
    })
}
//详情请求
export function detailReq(data){
    return request({
        url:cateURL,
        data
    })
}
//添加购物车
export function addCartReq(data){
    return request({
        url:addCartURL,
        data,
        method:'post',
    })
}
//获取购物车数据
export function cartReq(data){
    return request({
        url:getCartURL,
        data,
    })
}
//删除购物车中的某条数据
export function delReq(shopId){
 return request({
     url:delCartURL,
     method:'post',
     data:{
         token,
         shopId
     }
 })
} 
//头像上传
export function picReq(file){
    return request({
        url:picURL,
        data:{
            file
        },
        method:'post',
        headers:{
            'Content-Type':'multipart/form-data'
        }
    })
}
//注册请求
export function regReq(data){
    return request({
        url:registerURL,
        data,
        method:'post',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded' //登录注册都是表单提交
        }
    })
}
//token验证
export function tokenCheck(){
    return request({
        url:tokenURL,
        data:{
            token
        }
    })
}
//获取用户信息
export function getUserInfo(){
    return request({
        url:getUserURL,
        data:{
            token,
            userId
        }
    })
}
//获取电影数据列表
export function getMovieData(){
    return request({
        url:movieURL,
        data:{
            token:'', 
            optimus_uuid: '1BBA4270F0E511EAA2C8834A27C8F8221CA0529EAC494F13B375012ACBC4A755',
            optimus_risk_level: 71,
            optimus_code: 10,
        }

    })
}
//获取更多电影列表
export function getMoreMovie(movieIds){
    return request({
        url:moreMovieURL,
        data:{
            token:'', 
            movieIds,
            optimus_uuid: '1BBA4270F0E511EAA2C8834A27C8F8221CA0529EAC494F13B375012ACBC4A755',
            optimus_risk_level: 71,
            optimus_code: 10
        }
    })
}
//登录请求
// export function loginReq(data){
//     return request({
//         url:loginURL,
//         data,
//         method:'post',
//         headers:{
//             'Content-type':'application/x-www-form-urlencoded',
//         }
//     })
// }
//哪里需要哪里引入  比如user里面的store中的action需要数据  就在哪里引入