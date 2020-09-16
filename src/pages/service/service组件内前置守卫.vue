<template>
    <div class="container">
        客服
    </div>
</template>

<script>
import {tokenCheck} from 'Api'
export default {
    async beforeRouteEnter (to, from, next) {
        const {status} = await tokenCheck()//如果token验证失败 就进入登录页
        if(status == 1 || to.path == '/login' || to.path == '/registry'){
            next()
        }else{
            next("/login")
        }
    }
}
</script>
<style lang="scss" scoped>
    .container{
        flex: 1;
    }
</style>