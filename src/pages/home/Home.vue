<template>
  <main v-swipeleft = 'back' v-swiperight = 'forward'>
    <div class="swipe">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
      <movie-list/>
    
  </main>
</template>

<script>
import MovieList from './index'
export default {
  name:'Home',
  components:{
    MovieList
  },
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  width: 100vw;
  height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  .swipe {
    width: 100%;
    height: 200px;
    .van-swipe {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  
}
</style>
