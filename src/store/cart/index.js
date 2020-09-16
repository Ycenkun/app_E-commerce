//  cart有四个页面要用  不能放在一个里面  所以放在公用的store里面 公用的store里面命名即为index.js
import {categoryReq,listReq,detailReq,addCartReq,cartReq,delReq} from 'Api'
export default{
    namespaced: true,
    state:{
        cate:[],
        list:[],
        detail:'',
        cartResult:'',
        cartList:'',
        delCart:'',
    },
    actions: {
        //分类请求
        async cateReq({commit}){
            commit({
                type:"cateData",
                payload:await categoryReq()
            })
        },
        //列表请求
        async lReq({commit},payload){
            commit({
                type:'LREQ',
                payload:await listReq(payload) 
            })
        },
        //详情请求
        async dReq({commit},payload){//payload是传递过来的数据
            commit({
                type:'DETAIL_REQ',
                payload:await detailReq(payload)
            })
        },
        //添加购物车
        async cartReq({commit},payload){
            commit({
                type:'ADD_CART',
                payload:await addCartReq(payload)
            })
        },
        //购物车数据
        async cReq({commit},payload){
            commit({
                type:'CART_REQ',
                payload:await cartReq(payload)
            })

        },
        //删除购物车的数据
        // async deleteReq({commit},payload){
        //     commit({
        //         type:'DEL_REQ',
        //         payload:await delReq(payload)
        //     })
        // }
        deleteReq({commit},payload){
            call(commit,"DEL_REQ",delReq,payload)
        },

        //添加&操作一个checked属性
        changeFlag({commit}){
            call(commit,'CHANGE_FLAG')   
        }
    },
    mutations: {
        //修改分类数据
        cateData(state,{payload}){
            state.cate  = payload.data.data.data.map(item=>{
                // console.log(item.name);
                item.text = item.name
                delete item.name
                return item
            })
        },
        //操作列表数据
        LREQ(state,{payload}){
            state.list = payload.data.data.content
        },
        //操作详情数据
        DETAIL_REQ(state,{payload}){
            state.detail = payload
        },
        //操作添加购物车时的数据
        ADD_CART(state,{payload}){
            //添加购物车数据
            //这里会得到返回的结果 如状态码和msg
            state.cartResult = payload.data
        },
        //操作渲染购物车时列表数据
        CART_REQ(state,{payload}){
            state.cartList = payload.data
            state.cartList.data.map(item=>{
                item.checked = true
            })
        },
        //操作删除购物车的返回数据
        DEL_REQ(state,{payload:{data}}){
            // state.delCart = payload
            // console.log(data);
            // console.log(state.cartList.data);
            //state.cartList是一个数组  这里采用数组的filter过滤的方法，
            //因为删除后我们可以拿到被删除的这条数据的shopId值
            //购物车列表页中渲染出来的数据包含shopId值，
            //然后用filter方法过滤出原来state数据中不包含这条shopId的所有数据
            //filter会返回新数组
            state.cartList.data = state.cartList.data.filter(item=>item.shopId!=data)
            // console.log(state.cartList.data);
        },
        CHANGE_FLAG(state){
            state.cartList.data = state.cartList.data.map(item=>{
                item.checked = !item.checked
                return item 
            })
        }
    }
}

//封装commit函数
 async function call(commit,type,callback,data){
     if(callback){
         return commit({
             type,
             payload:{
                 result:await callback(data),
                 data,
                }
            })
        }
    return commit({
        type,
       })
}