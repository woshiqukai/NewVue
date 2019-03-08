import Vue from 'vue'
//导入router文件
import Router from 'vue-router'
Vue.use(Router)

import HomeConintre from './components/tabbar/HomeConintre.vue'
import SerchConintre from './components/tabbar/SerchConintre.vue'
import ShopcarConintre from './components/tabbar/ShopcarConintre.vue'
import MemberConintre from './components/tabbar/MemberConintre.vue'
// 新闻列表
import NewsListConeter from './components/news/NewsList.vue'
// 列表详情页面
import NewsInfoConeter from './components/news/NewsInfo.vue'

export default new Router({
  
  routes: [
    //redirect 重定向
     {path:'/',redirect:'/home'},
     {path:'/home',component:HomeConintre},
     {path:'/serch',component:SerchConintre},
     {path:'/member',component:MemberConintre},
     {path:'/shopcar',component:ShopcarConintre},
     // 新闻列表
     {path:'/home/newslist',component:NewsListConeter},
     //列表详情页面
     {path:'/home/newsinfo/:id',component:NewsInfoConeter}
  ],
  linkActiveClass:'mui-active'
})
