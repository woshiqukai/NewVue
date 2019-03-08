<template>
  <div>
    <mt-swipe :auto="1000" id="swipe">
        <mt-swipe-item class="swipe1" v-for="(itme,index) in img" :key='index'>
            <img :src="itme.img" alt="">
        </mt-swipe-item>
    </mt-swipe>
    <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><routerLink to="home/newslist">
		                    <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></routerLink></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">练习专区</div></a></li>
		        </ul> 
		</div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            img:null
        }
    },
    created(){
        this.getLoubunt();
    },
    methods:{
        getLoubunt(){
            this.$axios.get('/api/getlunbo').then(res=>{
                this.img = res.data.message
            })
        }
    }
};
</script>
<style lang="scss" scoped>
    .mui-slider{
        height: 200px;
        img{
            height: 200px;
        }
    }
    #swipe {
        height: 200px;
            img {
                height: 100%;
                width: 100%;
            }
    }
    .mui-content {
        .mui-table-view:first-child {
            margin-top: 0;
        }
        img{
            width: 60px;
            height: 60px;
        }
        ul{
            background-color: #fff;
        }
        .mui-table-view {
            .mui-table-view-cell{
                border: 0;
            }
        }
    }
</style>
