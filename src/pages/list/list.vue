<template>
  <div class="container" v-swipeleft = 'back' v-swiperight = 'forward'>
    <div class="btn">
      <van-button @click="getHot" type="primary">人气</van-button>
      <van-button @click="getNew" type="info">最新</van-button>
      <van-button @click="getSell" type="warning">销量</van-button>
      <van-button @click="getPrice" type="danger">价格</van-button>
    </div>
    <Listitem :list="list" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Listitem from "./Listitem";
export default {
  
  name: "List",
  components: {
    Listitem,
  },

  data() {
    return {
      px: "t",
    };
  },

  watch:{
    px() {
      const {
        query: { r, cid },
      } = this.$route;
      console.log("this.px");
      this.lReq({
        r,
        page: 1,
        cid,
        px: this.px,
        cac_id: "",
      });
    },
  },

  computed: {
    ...mapState("cartStore", {
      list: (state) => state.list,
    }),
  },
  methods: {
    // const {query:{ r, cid }} = this.$route;
    ...mapActions("cartStore", ["lReq"]),
    getHot() {
      this.px = "t";
    },
    getNew() {
      this.px = "latest";
    },
    getSell() {
      this.px = "sell";
    },
    getPrice() {
      this.px = "price";
    },
  },

  mounted() {
    const {
      query: { r, cid },
    } = this.$route;
    this.lReq({
      r,
      page: 1,
      cid,
      px: this.px,
      cac_id: "",
    });
  },
};
</script>

<style lang="scss">
@import "Assets/stylesheets/reset.scss";
//   .container{
//     width: 100vw;
//     height: 100vh;
// }
.van-image {
  width: 126px;
  height: 126px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
