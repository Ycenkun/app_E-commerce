<template>
  <div id="#app">
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <div class="box" v-swipeleft='fn'></div><br>
    <p>{{time|dataFilter('--')}}</p>
    <User></User>
    <!-- <button ></button> -->
  </div>
</template>

<script>
import User from 'Pages/user/index'
export default {
  name:'APP',
  components:{
    User
  },
  data(){
    return {
      time: Date.now()
    }
  },
  methods:{
    fn(){
      alert('触发了')
    }
  }
}
</script>

<style lang="scss" scoped>
  .box{
    width: 100px;
    height: 100px;
    background: green;
  }
</style>