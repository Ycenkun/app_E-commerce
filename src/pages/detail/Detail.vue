
<template>
  <div class="container">
    <div class="box" v-html="detail.data"></div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="goCart"/>
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="openShow"
      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="openShow"
      />
    </van-goods-action>
    <!-- 第一次加购和立即购买 -->
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :quota="quota"
      :quota-used="quotaUsed"
      :hide-stock="sku.hide_stock"
      @buy-clicked="buyNow"
      @add-cart="addCart"
      @stepper-change="changeNum"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import {getCookie} from 'Utils/cookie'
import { Toast } from 'vant';
export default {
  name: "Detail",
  data() {
    return {
      token:getCookie('token'),
      mark:0,
      show: false,
      quota: 100,
      type: 0,
      quotaUsed: 0,
      num:1,
      //   info:this.$route.query.info,
      sku: {
        // 数据结构见下方文档
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id

            v: [
              {
                id: "1", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl: this.$route.query.info.pic, // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: this.$route.query.info.pic, // 用于预览显示的规格类目图片
              },
              {
                id: "2",
                name: "蓝色",
                imgUrl: this.$route.query.info.pic,
                previewImgUrl: this.$route.query.info.pic,
              },
            ],
            largeImageMode: true, //  是否展示大图模式
          },
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: this.$route.query.info.id, // skuId
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1", // 规格类目 k_s 为 s2 的对应规格值 id
            price: this.$route.query.info.jiage * 100, // 价格（单位分）
            stock_num: 110, // 当前 sku 组合对应的库存
          },
          {
            id: this.$route.query.info.id, // skuId
            s1: "2", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "2", // 规格类目 k_s 为 s2 的对应规格值 id
            price: this.$route.query.info.jiage * 100, // 价格（单位分）
            stock_num: 110, // 当前 sku 组合对应的库存
          },
        ],
        price: this.$route.query.info.jiage, // 默认价格（单位元）
        stock_num: 227, // 商品总库存
      },
       goods: {
        // 默认商品 sku 缩略图
        picture: "",
      }, 
     
    };
  },
  computed: {
    ...mapState("cartStore", {
      //在这里拿到vuex中的数据
      detail: (state) => state.detail,
      cartResult:(state) => state.cartResult,
    }),
  },
  methods: {
    ...mapActions("cartStore", ["dReq","cartReq"]),
    openShow() {
      this.show = true;
    },
    changeNum(value){
        this.num = value
    },
    async addCart(){
        const {info:{pic,d_title,jiage,yuanjia,xiaoliang,comment,goodsid}} = this.$route.query
            if(this.mark != 1){
                await this.cartReq({
                imgUrl:pic,
                d_title,
                price:jiage,
                oringinal:yuanjia,
                sales:xiaoliang,
                comment,
                num:this.num,
                token:this.token,
                shopId:goodsid,
                
            })
        }       
//我靠  this.cartResult竟然可以直接拿到store中的state中的cartResult中的数据  
        const {status,msg} = this.cartResult
        if(status == 1){
            Toast.success(msg); //直接用不行 因为模板中没有  需要在引入一下
        }else{
            Toast.fail(msg); //直接用不行 因为模板中没有  需要在引入一下
            this.mark = 1
        }       
    },
    buyNow(){
        // console.log(this.$router);
        //真正的立即购买，详情页的数据传到支付界面
        //编程式导航 this.$router.go/push/back/forward
        this.$router.push({
            path:'pay',
            query:{
                ...this.$route.query,
                num:this.num,//购买数量也要传过去，购买数量不在route.query里  所以额外传
            }
        })
    },
    goCart(){
        this.$router.push({
            path:'/cart',
            query:{
                token:this.token,
                data: this.$route.query.info
            }
        })
    }
  },
  mounted() {
    const {
      query: { r, id },
    } = this.$route; //利用listitem中的路由传参 把参数传递过来  然后从这里解构   等到请求的时候在使用
    this.dReq({//调用store中actions中的dRep函数，然后dRep又会调用api中封装的请求函数请求数据，然后type声明一个mutations的函数，请求到数据后结果赋给paylaod 在mutation中调用函数并将payload的值解构出来，然后赋给state
      r,
      id,
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  // height: 35.3rem;
  flex: 1; //自适应展示区域的高度
  overflow: auto;
}
.van-goods-action {
  z-index: 500;
}
.van-info {
  height: 5px;
}
// .icon-zuojiantou {
// }
// .van-button {

// }
</style>
