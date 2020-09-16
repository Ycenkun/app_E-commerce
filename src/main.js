//如果导入的包没有export default，则可以直接引入不需要from
import Vue from "vue";
import App from "./App.vue";
import "Utils/rem"; // 安装的px2rem后 在utils rem.js中设置  在这里引入
import "Utils/vantCompImport"; //安装vant后 在utils vantCompImport中按需引入组件，然后在这里引入
import store from "Store/index";
import myPlugin from "Plugins/index";
import md5 from "md5";
import router from "Router/index";
import "../src/mixin/index";
// import {tokenCheck }from './api/index'
// import {Toast} from 'vant' //这里是直接引入vant 而不是引入路径
Vue.use(myPlugin);

Vue.config.productionTip = false;
Vue.prototype.$md5 = md5; //这样所有的组件都可以通过this.md5来实现
//全局前置守卫
// router.beforeEach(async (to, from, next) => {
//   next();
//   const {
//     data: { status },
//   } = await tokenCheck();
//   if (status == 1 || to.path == "/login" || to.path == "/registry") { //未登录只能跳转登录页或者注册页
//     next();
//   } else {
//     next("/login");
//   }
// });

//全局后置守卫
// router.afterEach( (to,from) => {//全局后置守卫，没有拦截功能，只能做提示
//   console.log(from);
//   console.log(to);
//   Toast("离开了")
// })

new Vue({
  store, //store 写在这里可以得到一个全局的$store   在任何地方都能用
  router, //可全局得到$route $router
  render: (h) => h(App),
}).$mount("#app"); //这里引入的东西都可以在挂载的#app根组件中使用
