import Vue from 'vue'
import Vuex from 'vuex'

// import messages from './store/messages.js';
import users from './store/users';  // 状态管理
import shops from './store/shops' //门店管理
import goods from './store/goods'; // 商品仓库
import pets from './store/pets';   //宠物管理
import goodsList from "./store/goodsList" // 商品列表
import service from './store/service'// 服务管理
import addShopGoods from "./store/addShopGoods"; // 门店新增商品

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
      // messages,
      users,
      shops,
      goods,
      pets,
      goodsList,
      service,
      addShopGoods
  }
})
