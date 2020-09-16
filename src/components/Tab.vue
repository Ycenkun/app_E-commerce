<template>
    <header>
        <van-icon v-if='flag' name="arrow-left" @click="lastPage" />
        <h3>{{title}}</h3>
        <van-icon v-if='flag' name="ellipsis" @click="openMask"/>
        <van-overlay :show="show">
                <ul v-for="(item,index) in sidedata" :key="index">
                    <van-icon :name=item.iconName />
                    <router-link tag="li" :to="{path:item.path}">{{item.name}}</router-link>
                </ul>
        </van-overlay >
    </header>
</template>
<script>
export default {
    name:'Tab',
    data() {
        return {
            flag:false,
            title:"首页",
             show: false,
             sidedata:[
                 {
                    name:"首页",
                    path:"/home",
                    iconName:'wap-home-o'
                 },
                 {
                    name:"搜索",
                    path:"/search",
                    iconName: "search",
                 },
                 {
                    name:"客服",
                    path:"/service",
                    iconName: "smile-comment-o",
                 },
                 {
                    name:"反馈",
                    path:"/feedback",
                    iconName: "comment-o",
                 },
                 {
                    name:"我的",
                    path:"/mine",
                    iconName: "manager-o",
                 },
             ]
                 
             
        }
    },

    watch: {
        $route(){
            // console.log("路由改变了")
            const{path} = this.$route
            if(path=='/home'||path.indexOf('/detail')!=-1){
                this.flag = false;
            }else{
                this.flag = true
            }
            this.title=this.$route.meta.title
        }
    },

    methods:{
        lastPage(){
            //编程式导航   返回上一层
            this.$router.back()
        },
    
        openMask(){
            this.show = !this.show
        },
    },
}
</script>

<style lang="scss" scoped>
@import 'Assets/stylesheets/theme.scss';
    header{
        width: 100vw;
        height: 55px !important;
        background: $color;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        overflow: auto;
        h3{
            margin: 0 auto;
            color: white;
            font-size: 18px;
        }
        .van-icon{
            color: white;
        }
        .van-overlay{
            width: 30%;
            height: 30%;
            position: fixed;
            left: 70%;
            top: 8%;
           background: rgba(51,51,51,0.9);
           border-radius: 5px;
           display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 10px 0; 
            &::before{
                display: block;
                content: "";
                width: 0;
                height: 0;
                border-left: 7px transparent solid;
                border-right: 7px transparent solid;
                border-bottom: 7px rgba(17, 17, 17,0.9) solid;
                border-top: none;
                position: absolute;
                z-index: 1;
                zoom: 1;
                right: 8px;
                top: -7px;
            }
        }
        ul{ 
            width: 100%;
            padding: 10px 20px;
            border-bottom: 1px solid #ccc;
            display: flex;
            li{
                margin-left: 5px;
                color: white;
                font-size: 16px;
                font-family: Arial,Helvetica,sans-serif;
            }
        }
        ul:nth-child(5){
             border-bottom:none;
        }
        .van-icon{
            width: 16px;
            color: white;
        }
    }
</style>