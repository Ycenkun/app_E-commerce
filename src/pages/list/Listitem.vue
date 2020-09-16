<template>
  <div class="show" v-swipeleft = 'back' v-swiperight = 'forward'>
    <ul>
      <!-- 点击这里的标签既可以实现路由跳转  :to 为路由传参-->
      <router-link tag='li' v-for="item in list" :to="{path:'/detail',query:{id:item.id,r:'p/d',info:item}}" :key="item.id">
        <div class="imgbox">
          <van-image :src="item.pic" alt="" />
        </div>
        <div class="info">
          <div class="title">{{ item.title }}</div>
          <div class="price">{{ item.yuanjia }}</div>
          <div class="address">{{ item.shop_name }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
 props:['list']
};
</script>

<style lang="scss" scoped>
@import "../../assets/stylesheets/reset.scss";
// .container{
//     overflow: auto;
//     width: 100vw;
//     height: 100vh;
//     .box{
//         display: flex;
//         img{
//             width: 126px;
//             height: 126px;
//         }
//     }
// }
.show {
  width: 100vw;
  height: 33rem;
  overflow: auto;
  padding: 10px;
  li {
    display: flex;
    padding: 10px;

    .van-image {
      width: 126px;
      height: 126px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .imgbox {
    margin-right: 6px;
  }
  .title {
    font-size: 18px;
    color: #222;
    margin-bottom: 25px;
  }
  .price {
    color: red;
    font-size: 14px;
    margin-bottom: 14px;
  }
  .address {
    color: #666;
  }
}
</style>
