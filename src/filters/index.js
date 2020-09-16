//自定义过滤器 先导出给plugin  plugin再统一暴露给main.js 然后其他组件可以直接调用
// 不用再引入vue，可通过plugin调用的时候把Vue传递过来

export default function filterHandler(Vue){
    Vue.filter('dataFilter',function(val,type){//val即调用的时候|左边的数据, 参数val默认要加，type可选
        const date = new Date(val)
        return date.getFullYear()+type+(date.getMonth()+1)+type+date.getDate()
    }),
    Vue.filter('imgFilter',function(val){ //val即调用的时候|左边的数据 eg：:src=“item.pic|imgFilter”
        return val.replace('w.h','128.180')
    })

}
//这里暴露出去的是一个结果