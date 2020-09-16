<template>
    <div class="container">
        one
    </div>
</template>

<script>
export default {
    // 一个组件共用不同url时触发
    beforeRouteUpdate(to,from,next){
        console.log(to,from,next);
        console.log('执行了');
    //     const {params:{id}} = this.$route //这里id是不同页面的id 这个id可以动态的切换
    //     const {data:{content}} = await hotReq(id) //根据不同的id发送不同的数据请求
        next(true)
    }
}
</script>


<style lang="scss" scoped>
    .container{
        flex: 1;
    }
</style>