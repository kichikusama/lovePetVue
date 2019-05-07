import Vue from 'vue'
import App from './App.vue'
import router from './router'  // 引入路由
import store from './store';  // 引入状态机
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
import g from './_globals.js'; // 组件自动注册

Vue.use(ElementUI);

new Vue({
  router, //配置路由，在Vue实例中添加 路由对象
  store, // 状态机
  render: h => h(App),
}).$mount('#app')
