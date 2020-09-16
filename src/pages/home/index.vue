<template>
  <div class="wrapper" v-swipeleft = 'back' v-swiperight = 'forward'>
    <div class="dataList">
      <div v-for="item in movieList" :key="item.id">
        <van-card
          @click="jumpPage"
          :num="item.showInfo"
          price="25.00"
          :desc="item.star"
          :title="item.nm"
          :thumb="item.img | imgFilter"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex"
import BScroll from '@better-scroll/core' //最外层盒子要写成overflow：hidden才起作用
import Pullup from '@better-scroll/pull-up'
import _ from 'loadsh'
import { Toast } from 'vant';
BScroll.use(Pullup)
export default {
  computed: {
    ...mapState("homeStore", {
      movieList: (state) => state.movieList,
      movieIds: (state) => state.movieIds,
    }),
  },
  methods: {
    ...mapActions("homeStore", ["getData","getMoreData"]),
    jumpPage(){
        this.$router.push('/service')
    }
  },
  mounted() {
    this.getData();
    const bs = new BScroll(document.querySelector('.wrapper'), {
        click:true,  //穿透顶层的div
        pullUpLoad: true,//开启滑动
        threshold: 90 //阈值
    })
    let count = 0
    bs.on('pullingUp',async () => { //滑动事件
      const ids = _.chunk(this.movieIds.slice(12),10)//给数据对应的id分组，每次发送一个分组
    if(count<ids.length){
        await this.getMoreData(ids[count].join(','))
        bs.refresh() //刷新列表
    }else{
        Toast({
            message: '亲爱的，到底了',
            position: 'bottom',
        });
    }
      bs.finishPullUp()//使每一次上拉都触发
      count++
    })
  },
};
</script>

<style lang="scss" scoped>
main {
  .wrapper {
    margin-top: 10px;
    height: 100%;
    overflow: hidden;
    .van-card {
      background: rgb(243, 241, 241);
    }
  }
}
</style>
