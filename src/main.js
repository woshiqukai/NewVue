// 入口代码
import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = false
// 这是导入mint-ui组件
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'
import { Popup } from 'mint-ui';

Vue.component(Popup.name, Popup);
// 这是导入mui组件
import '../lib/mui/css/mui.css'
import '../lib/mui/css/icons-extra.css'

//过滤器 时间格式
import moment from 'moment'
Vue.filter('dateFormat',function(dateStr,pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(dateStr).format(pattern)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
