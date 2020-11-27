import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'

import animated from 'animate.css'

//脚手架中导入所有的Mint UI 组件
import MintUI from 'mint-ui'

//导入MintUI的样式文件
import 'mint-ui/lib/style.min.css';

//通过Vue.use()方法将Mint UI注册为Vue的插件
Vue.use(MintUI);

Vue.use(animated);




axios.defaults.baseURL = '/api'
Vue.prototype.axios = axios;


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
