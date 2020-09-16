<template>
    <div class="container">
        {{username}}----{{userInfo}}
    </div>
</template>

<script>
import {getUserInfo} from 'Api'
// import {Toast} from 'vant'
export default {
    async beforeRouteEnter (to, from, next) {//不能和vuex进行交互
        //数据预载指组件提前获取数据,在进入组件之前就拿到了数据
        //这里一定要注意this不存在  this是undefined
        console.log(to,from,next);
        //获取数据
        const {data:{username,phone}} = await getUserInfo()
        // console.log(data);
        //将数据给到组件
        next(vm=>{ //vm是指当前组件   这里this不能用，因为这时还没有进入组件
            vm.$set(vm.userInfo,'username',username)
            vm.$set(vm.userInfo,'phone',phone)
        })
    },
    data() {
        return {
            userInfo:{}
        }
    },

}
</script>
<style lang="scss" scoped>
    .container{
        flex: 1;
    }
</style>