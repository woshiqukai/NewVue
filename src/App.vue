<template>
  <div id="app">
    <!-- 顶部区域 -->
    <mt-header fixed title="固定在顶部">
    </mt-header>
    <transition mode='out-in'>
       <router-view></router-view>
    </transition>
    <!-- 底部区域 -->
    <nav class="mui-bar mui-bar-tab">
      <routerLink class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </routerLink>
      <routerLink class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">会员</span>
      </routerLink>
      <routerLink class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </routerLink>
      <routerLink class="mui-tab-item" to="/serch">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </routerLink>
    </nav>
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss">
#app {
  background-color: #fff;
  padding-top: 40px;
  overflow-x: hidden;
  padding-bottom: 50px;
}
html,body {
  background-color: #fff;
}

.v-enter,
{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease;
  // position: absolute;
}
</style>
