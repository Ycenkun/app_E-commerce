<template>
  <div class="container">
    <div class="row">
      <label for=""> 请填写姓名 </label>
      <input type="text" />
    </div>

    <div class="row">
      <label for=""> 请填写年龄 </label>
      <input type="text" />
    </div>
    
    <div class="row">
      <label for=""> 请填写年龄 </label>
      <input type="text" />
      <router-link to="/home"> 首页 </router-link>
    </div>

    <van-button type="default"> 提交 </van-button>
  </div>
</template>

<script>
import {Dialog} from 'vant'
// import {Toast} from 'vant'
export default {
    //针对某些表单比较多的页面，当用户要离开的时候给用户提示
    beforeRouteLeave (to, from, next) {
        console.log(to,from,next);
        Dialog.confirm({
        message: '确定要离开吗',
        theme: 'round-button',
        }).then(() => {
            next()
        }).catch(()=>{
            next(false)
        });

    }
}


</script>
<style lang="scss" scoped>
.container {
  flex: 1;
}
</style>
