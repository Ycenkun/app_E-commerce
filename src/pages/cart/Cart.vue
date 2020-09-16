<template>
  <div class="container" v-swipeleft = 'back' v-swiperight = 'forward'>
    <van-empty
      class="custom-image"
      image="https://img.yzcdn.cn/vant/custom-empty-image.png"
      description="空空如也，快去逛逛吧"
      v-if="isEmpty"
    />
    <div v-for="item in cartList.data" :key="item._id" class="cart_list">
      <!-- {{item.checked}} -->
        <van-checkbox v-model="item.checked" ></van-checkbox>
      <van-swipe-cell>
        <van-card
          :num="item.num"
          :price="item.price"
          :title="item.d_title"
          class="goods-card"
          :thumb="item.imgUrl"
        />
        <template #right>
          <van-button
            square
            text="删除"
            type="danger"
            class="delete-button"
            @click="deleteReq(item.shopId)"
          />
        </template>
      </van-swipe-cell>
    </div>
    <van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="flag" @click="changeFlag">全选</van-checkbox>
        <template #tip>
          你的收货地址不支持同城送,
          <span @click="onClickEditAddress">修改地址</span>
        </template>
      </van-submit-bar>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
// import {getCookie} from 'Utils/cookie'
export default {
  name: "Cart",
  data() {
    return {
      flag:true,
      // checked:true,
      token: this.$route.query,
    };
  },
  // watch: {
  //   cartList:{
  //     deep:true,
  //     handler(){
  //       this.changeFlag()
  //     }
  //   }
  // },
  computed: {
    ...mapState("cartStore", {             //cartStore为在vuex的根文件内的该vuex文件被引入后的数据分块名
      cartList: (state) => state.cartList, //cartList 为state中给数据分类器的名字
      delCart: (state) => state.delCart,
    }),
    isEmpty() {
      return this.cartList.data == 0;
    },
     totalPrice(){
      let sum = 0
      this.cartList.data.map(item=>{
        if(item.checked){
          sum += item.price*item.num
        }
      })
      return sum*100
    },
  },
  methods: {
    //cReq可以在执行的时候传参   
    ...mapActions("cartStore", ["cReq", "deleteReq","changeFlag"]), //调用action中的函数 可在mouted钩子里执行的时候传参
    onSubmit(){                                                     //也可在methods选项中靠事件执行传参
      this.$router.push({
        path:'/cartPay',
        query:{
          info:this.cartList.data.filter(item=>item.checked)
        }
      })
    },
    onClickEditAddress(){
    },

  },
  mounted() {
    this.cReq(this.token);
    // console.log(this.cartList);
      let sum = 0
      this.cartList.data.map(item=>{
        if(item.checked){
          sum += item.price*item.num

        }
      })
      return sum*100

  },
  
};
</script>

<style lang="scss" scoped>
.container {
  flex: 1;
  overflow: auto;
  .goods-card {
    margin: 0;
    background-color: white;
  }

  .delete-button {
    height: 100%;
  }
  .cart_list{
    display: flex;
    margin-left: 10px;
  }
  .van-card__content{
    min-width: 217px;
  }
}
</style>
