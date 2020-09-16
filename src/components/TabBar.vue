<template>
    <footer v-if="flag">
       <ul>
           <router-link tag='li' :to='item.path' active-class="active" v-for="item in barDate" :key=item.id>
               <van-icon :name=item.iconname ></van-icon>
               <span>{{item.text}}</span>
           </router-link>
       </ul>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            flag:true,
            barDate:[
                {
                    id:1,
                    text:'首页',
                    iconname:'wap-home-o',
                    path:'/home'
                },
                {
                    id:2,
                    text:'分类',
                    iconname:'apps-o',
                    path:'/category'
                },
                {
                    id:3,
                    text:'活动',
                    iconname:'gift-o',
                    path:'/activity'
                },
                {
                    id:4,
                    text:'购物车',
                    iconname:'shopping-cart-o',
                    path:'/cart'
                },
                {
                    id:5,
                    text:'我的',
                    iconname:'user-o',
                    path:'/user'
                },
            ]
        }
    },
    watch: {
        $route(){
           const {path} =  this.$route
        //    console.log(path)
            if(path=='/detail'||path=='/pay'||path=='/cart'||path=='/cartPay'){
                this.flag = false
            }else{
                this.flag = true
            }
        }
        
    },
    mounted() {
    },
}
</script>

<style lang="scss" scoped>
    footer{
        width: 100vw;
        height: 48px;
        border-top: 1px solid #cccccc;
        ul{
            width: 100vw;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            li{
                display: flex;
                flex-direction: column;
                align-items: center;
                &.active{
                    color: red;
                }
            }
            span{
                font-size: 12px;

            }
            i{
                font-size: 22px;

            }
        }
    }
</style>