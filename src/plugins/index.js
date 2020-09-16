//自定义插件
import filterHandler from 'Filters/index' //封装好的过滤器引入
import directiveHandler from 'Directive/index' //封装好的自定义指令引入

const myPlugin = { //
    install(Vue){
        //这是过滤器
        filterHandler(Vue) //这是封装好的过滤器
        //自定义指令
        directiveHandler(Vue)//这是封装好的自定义指令
    }
}

export default myPlugin 