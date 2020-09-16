import Vue from 'vue'
import router from 'Router' //引入Router对象，使用Router对象中的方法
Vue.mixin({
    methods:{
        back(){           //无需引入该文件，在所有组件中都可以调用
            router.back() //直接在其他组件中调用函数名即可使用
        },
        forward(){
            router.forward()
        }
    },
})