<template>
    <div class="container">
        <!-- 二级或者多级路由 /user/userinfo /api/user/... -->
        <!-- 所谓动态路由就是多个url地址共用一个组件 -->
        导航区
        <hr>
        <!-- <router-link to="/feedback/one">one</router-link><br>
        <router-link to="/feedback/two">two</router-link><br> -->
        <router-link :to="{
            name:'one',
            params:{
                id:34
            }
        }">one--1</router-link><br>
        <router-link :to="{
            name:'one',
            params:{
                id:32
            }
        }">one--2</router-link><br>



    <router-link to="/feedback/two"> two </router-link>

        <!-- 页面跳转完成后就在路由容器内显示 -->
        <!-- 更新守卫---路由不一样，组件一样 -->
        内容展示区————路由容器
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .container{
        flex: 1;
    }
</style>