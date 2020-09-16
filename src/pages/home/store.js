import {getMovieData,getMoreMovie} from 'Api'
import { Toast } from 'vant';
export default{
    namespaced: true,
    state:{
        movieList:'',
        movieIds:'',
    },
    actions: {
        async getData({commit}){
            commit({
                type:'GET_DATA',
                payload:await getMovieData(),
            })
        },
        async getMoreData({commit},payload){
            commit({
                type:'GET_MORE',
                paylaod:await getMoreMovie(payload)
            })
        }
    },
    mutations: {
        GET_DATA(state,payload){
            state.movieList = payload.payload.data.movieList
            state.movieIds = payload.payload.data.movieIds
        },
        GET_MORE(state,payload){
            Toast.loading({
                message: '加载中...',
                forbidClick: true,
                loadingType:'spinner'
              });
            state.movieList.push(...(payload.paylaod.data.coming))//把数据从数组中解构出来  然后在推入数组
            
        }
    }
}