//自定义指令   导出给plugin  plugin再统一暴露给main.js
function touch(el,type,handler){
    const hammer = new Hammer(el); //Hammer从index.html文件中引入，在这里可以直接声明一个实例对象
    hammer.on(type,handler);    //事件参数为（事件类型，事件处理函数）
}

export default function directiveHandler(Vue){
    Vue.directive('tap',{
        //用来引入移动端事件库
        bind(el,binding){
            touch(el,binding.name,binding.value)//调用hammer的实例方法，touch（当前绑定的元素，事件名，事件的值往往是个函数）
        }
    }),
    Vue.directive('press',{
        //用来引入移动端事件库
        bind(el,binding){
            touch(el,binding.name,binding.value)
        }
    }),
    Vue.directive('rotate',{
        //用来引入移动端事件库
        bind(el,binding){
            touch(el,binding.name,binding.value)
        }
    }),
    Vue.directive('pinch',{
        //用来引入移动端事件库
        bind(el,binding){
            touch(el,binding.name,binding.value)
        }
    }),
    Vue.directive('swipeleft',{
        //用来引入移动端事件库
        bind(el,binding){
            touch(el,binding.name,binding.value)//binding.value是要处理的事件
        }
    }),
    Vue.directive('swiperight',{
        //用来引入移动端事件库
        bind(el,binding){
            touch(el,binding.name,binding.value)
        }
    }),
    Vue.directive('swipetop',{
        //用来引入移动端事件库
        bind(el,binding){
            touch(el,binding.name,binding.value)
        }
    })
}

