<template>
  <div id="app">
    <!-- 路由展示区域，内置组件 router-view -->
    
    <Tab></Tab>
      <!-- //路由容器-所有的路由页面的数据都会在这个容器中显示 -->
      <router-view> </router-view>
    <TabBar></TabBar>
  </div>
</template>

<script>
// import Home from 'Pages/home/Home'
import Tab from 'Comp/Tab'
import TabBar from 'Comp/TabBar'
export default {
  name:'APP',
  components:{
    Tab,TabBar
  }
}
</script>

<style lang="scss">
@import 'Assets/stylesheets/reset.scss';
@import 'Assets/stylesheets/theme.scss';

#app{
  display: flex;
  flex-direction: column;
}
  
</style>