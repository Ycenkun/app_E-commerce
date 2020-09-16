import Vue from "vue"
import Vuex from "vuex"
import userStore from 'Pages/user/store'
import homeStore from 'Pages/home/store'
import cartStore from './cart/index'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        userStore,homeStore,cartStore
    }
});

export default store