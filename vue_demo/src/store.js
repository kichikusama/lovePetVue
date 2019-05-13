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
<<<<<<< HEAD
import addShopService from "./store/addShopService"; // 门店新增服务
=======
import orders from "./store/orders"; // 订单管理
import addShopPets from './store/addShopPets'//门店宠物管理新增宠物
import members from './store/members';
>>>>>>> 8a0dd6ec49cfd42a61c144586a99aed25bb8fa95

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
      addShopGoods,
<<<<<<< HEAD
      addShopService
=======
      orders,
      addShopPets,
      members
>>>>>>> 8a0dd6ec49cfd42a61c144586a99aed25bb8fa95
  }
})
