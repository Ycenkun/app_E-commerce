import axios from 'axios'
import qs from 'qs'
// import {getCookie} from 'Utils/cookie'
const ins = axios.create({
    // baseURL:''
    timeout:4000
})

//设置请求拦截器
ins.interceptors.request.use(function(config){
    //token携带
    // const token = getCookie('token');
    // config.headers.common['authToken']=token
    return config
},function(error){
    return Promise.reject(error)
})

//设置响应拦截器
ins.interceptors.response.use(function(res){
    //将得到的结果做一个数据处理
    return res
},function(error){
    return Promise.reject(error)
})


export default function request(option){
    const {url,method='get',headers={
        'Content-Type':'application/json'
    },data} = option;
    switch (method.toUpperCase()) {
        case 'GET':
            return ins.get(url,{params:data})          
        case 'POST':
            switch (headers['Content-Type']) {
                case 'application/json':
                    return ins.post(url,data)                 
                case 'application/x-www-form-urlencoded':
                    // const p = new URLSearchParams()
                    // for(let key in data){
                    //     p.append(key,data[key])
                    // }
                    return ins.post(url,qs.stringify(data),{headers})
                case 'multipart/form-data':{
                    const p = new FormData()
                    for(let key in data){
                        p.append(key,data[key])
                    }
                    return ins.post(url,p,{headers})
                }
                default:
                    return ins.post(url,data,)
                    
            }
        default:
            return ins(option)
    }
}