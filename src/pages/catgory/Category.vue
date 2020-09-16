<template>
  
  <div class="container" v-swipeleft = 'back' v-swiperight = 'forward'>
      <van-loading size="24px" v-if="!(cate[0])">加载中...</van-loading>
    <van-tree-select
      height="152vw"
      :items="cate"
      :main-active-index.sync="active"
    >
      <template #content>
        <div class="dataBox">
          <div
            class="dataA"
            v-for="(floor, index) in cate[active].floors"
            :key="index"
          >
            <h1>{{ floor.name }}</h1>
            <ul>
              <router-link 
               tag="li"
               v-for="item in floor.list" 
               :key="item.api_cid"
               :to="{
                 path:'/list',
                 query:{
                   cid:item.api_cid,
                   r: 'class/cyajaxsub'
                 },
               }"             
               >
                <van-image :src="item.img" />
                <span>{{ item.name }}</span>
              </router-link>
            </ul>
          </div>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Category",
  data() {
    return {
      active: 0,
      // items: [{ text: '分组 1' }, { text: '分组 2' }],
    };
  },
  
  computed: {
    ...mapState("cartStore", { cate: (state) => state.cate }),
  },
  methods: {
    ...mapActions("cartStore", ["cateReq"]),
  },
  mounted() {
    // console.log();
    this.cateReq();
  },
  updated() {
    // console.log(cate)
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  .van-tree-select__nav {
    flex: 0.5;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 15px 13px;
    }
    .van-image {
      width: 60px;
      height: 60px;
      margin-bottom: 10px;
    }
    span {
      font-size: 12px;
      color: #333;
    }
  }
}
.dataBox {
  padding: 10px;
}
h1 {
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: 400;
  color: #333;
}
</style>
