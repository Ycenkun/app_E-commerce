<template>
  <div class="container">
    <van-swipe-cell>
      <van-card
        :num="product.num"
        :price="product.info.jiage"
        :desc="product.info.miaoshu"
        :title="product.info.d_title"
        class="goods-card"
        :thumb="product.info.pic"
      />
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
    <van-submit-bar
      :price="totalPrice"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送,
        <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>
    <!-- <van-dialog v-model="show" title="标题" >
        <img src="https://img.yzcdn.cn/vant/apple-3.jpg" width="90%" height="80%"/>
    </van-dialog> -->
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  name: "Pay",
  data() {
    return {
      //   product: this.$route.query,
      checked: true,
      show:false
    };
  },
  computed: {
    product() {
      return this.$route.query;
    },
    totalPrice() {
      return this.product.info.jiage * this.product.num * 100;
    },
  },
  methods: {
    onSubmit() {
      if (this.checked) {
          Dialog.alert({
            message: '购买成功',
            theme: 'round-button',
            }).then(() => {
            // on close
            });
      } else {
        Dialog.alert({
          message: "您还没有勾选全选",
          theme: "round-button",
        }).then(() => {
            this.checked = true;
          // on close
        });
      }
    },
    onClickEditAddress() {},
  },
};
</script>

<style lang="scss" scoped>
@import "Assets/stylesheets/reset.scss";
.container {
  flex: 1;
}
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
</style>
