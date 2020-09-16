//路由懒加载  webpack代码分割功能(注释语法)+vue异步组件【import】
const Home = ()=>import(/*webpackChunkName:'group-foo'*/'Pages/home/Home.vue')
const Category = ()=>import(/*webpackChunkName:'group-foo'*/'Pages/catgory/Category.vue')
const Detail = ()=>import(/*webpackChunkName:'group-foo'*/'Pages/detail/Detail.vue')
const Cart = ()=>import(/*webpackChunkName:'group-foo'*/'Pages/cart/Cart.vue')
const User = ()=>import(/*webpackChunkName:'group-foo'*/'Pages/user/index.vue')
const Login = ()=>import(/*webpackChunkName:'group-foo'*/'Pages/user/login.vue')
const Registry = ()=>import(/*webpackChunkName:'group-foo'*/'Pages/user/registry.vue')
const NotFound = ()=>import(/*webpackChunkName:'group-foo'*/'Pages/404/index.vue')
const List = ()=>import(/*webpackChunkName:'group-foo'*/'Pages/list/list.vue')
const Activity = ()=>import(/*webpackChunkName:'group-foo'*/'Pages/activity/activity.vue')
const Pay = ()=>import(/*webpackChunkName:'group-foo'*/'Pages/pay/pay.vue')
const cartPay = ()=>import(/*webpackChunkName:'group-foo'*/'Pages/pay/cartPay.vue')
const Service = ()=>import(/*webpackChunkName:'group-foo'*/'../pages/service/service.vue')
const Feedback = ()=>import(/*webpackChunkName:'group-foo'*/'../pages/feedback/feedback.vue')
const One = ()=>import(/*webpackChunkName:'group-foo'*/'../pages/feedback/one.vue')
const Two = ()=>import(/*webpackChunkName:'group-foo'*/'../pages/feedback/two.vue')

export default [
    {
        path:'/',
        redirect:'/home', //重定向  在没有任何跳转的时候 直接默认打开的页面
        meta:{
            title:'登录'
        }
    },
    {
        path:'/home',
        component:Home,
        meta:{
            title:'首页'
        }
    },
    {
        path:'/service',
        component:Service,
        meta:{
            title:'客服'
        }
    },
    {
        path:'/category',
        component:Category,
        meta:{
            title:'分类'
        }
    },
    {
        path:'/feedback',
        component:Feedback,
        children:[//二级路由
            {
                path:'one/:id',//子路由不写斜杠
                component:One,
                name:'one' //不要写斜杠
            },
            {
                path:'two',//子路由不写斜杠
                component:Two,
               
            }
        ],
        meta:{
            title:'反馈'
        }
    },
    {
        path:'/detail',
        component:Detail,
        meta:{
            title:'详情'
        }
    },
    {
        path:'/activity',
        component:Activity,
        meta:{
            title:'活动'
        }
    },
    {
        path:'/cart',
        component:Cart,
        meta:{
            title:'购物车'
        },
        // beforeEnter:async (to, from, next) => {
        //     console.log(from);
        //     const {status} = await tokenCheck()
        //     if(status == 1 || to.path == '/login' || to.path == '/registry'){
        //         next()
        //     }else{
        //         const toast = Toast.loading({
        //             duration: 0, // 持续展示 toast
        //             forbidClick: true,
        //             message: '正在跳转到登录页，倒计时 3 秒',
        //           });
                  
        //           let second = 3;
        //           const timer = setInterval(() => {
        //             second--;
        //             if (second) {
        //               toast.message = `正在跳转到登录页，倒计时 ${second} 秒`;
        //             } else {
        //               clearInterval(timer);
        //               // 手动清除 Toast
        //               Toast.clear();
        //               next('/login')
        //             }
        //         }, 1000);
        //     }
        // }
    },
    {
        path:'/user',
        component:User,
        meta:{
            title:'用户'
        }
    },
    {
        path:'/login',
        component:Login,
        meta:{
            title:'登录'
        }
    },
    {
        path:'/registry',
        component:Registry,
        meta:{
            title:'注册'
        }
    },
    {
        path:'/list',
        component:List,
        meta:{
            title:'列表'
        }
    },
    {
        path:'/pay',
        component:Pay,
        meta:{
            title:'支付'
        }
    },
    {
        path:'/cartPay',
        component:cartPay,
        meta:{
            title:'支付'
        }
    },
    {
        path:'*',//代表所有
        component:NotFound,
        meta:{
            title:'出错啦'
        }
    },
    
]