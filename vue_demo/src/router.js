import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Login from './views/login.vue';
import Register from './views/register.vue';
import Management from './views/management.vue'; // 平台管理员 主界面
import StoreManagment from './views/storeManagement.vue'; // 门店管理员 界面

import Users from './components/users/users.vue'; // 用户管理 组件
import Auditing from './components/users/usersAuditing.vue'; // 用户审批 组件
import UsersIntroduce from './components/users/usersIntroduce.vue';// 用户详情 组件
import DisabledUsers from './components/users/usersDisabled.vue'; // 违规用户 组件
import SomeRules from './components/users/someRules.vue'; // 管理须知 组件

import Stores from './components/stores/stores.vue'; // 门店管理 组件
//李东岳
import AddService from './components/service/addService.vue';// 新增服务 组件
import FindService from './components/service/findService.vue';// 查询服务 组件
import AddShopService from './components/service/addShopService.vue'// 新增门店服务 组件 

//cq
import ChooseServe from './views/chooseServe';//选择界面(新增门店，进入门店，进货管理)
import ManageStore from './views/manageStore';//新增门店
import Stock from './views/stock';//进货管理
import Shop from './components/stock/shop';//新增商品
import Serve from './components/stock/serve';//新增服务
import Pet from './components/stock/pet'//新增宠物
import AddStore from './components/manageStore/addStore'//新增门店
import RevisionStore from './components/manageStore/revisionStore'//修改门店
import DeleteStore from './components/manageStore/deleteStore'//删除门店
import FindStore from './components/manageStore/findStore' //查找门店
//cq

// cxy
import AddGoods from "./components/goods/addGoods" // 门店管理 商品进货
import AddShopGoods from "./components/goods/addShopGoods" // 门店新增商品
import GoodsList from "./components/goods/goodsList" // 门店管理 商品列表
import MembersList from './components/members/membersList.vue';//宠主列表 

import OrdersList from "./components/orders/ordersList"; // 订单管理 订单列表

//cxy

import AddPets from './components/pets/addPets' //新增宠物
import PetsList from './components/pets/petsList' //宠物列表

Vue.use(Router)

const router = new Router({
  routes: [
    {   // 通过对象进行描述
      path: '/',
      name: 'Login',
      component: Login
    },

    {   // 通过对象进行描述
      path: '/login/:username/:password', // 接收参数
      name: 'LoginWithParams',
      component: Login
    },

    //cq
    {   // 通过对象进行描述
      path: '/chooseServe', // 接收参数
      name: 'ChooseServe',
      component: ChooseServe
    },
    {   // 通过对象进行描述
      path: '/manageStore', // 接收参数
      name: 'ManageStore',
      component: ManageStore,
      children:[
        {
          path:'/manageStore/addStore',
          name:'AddStore',
          component:AddStore
        },
        {
          path:'/manageStore/revisionStore',
          name:'RevisionStore',
          component:RevisionStore
        },
        {
          path:'/manageStore/deleteStore',
          name:'DeleteStore',
          component:DeleteStore
        },
        {
          path:'/manageStore/findStore',
          name:'FindStore',
          component:FindStore
        }
      ]
    },
    {   // 通过对象进行描述
      path: '/stock', // 接收参数
      name: 'Stock',
      component: Stock,
      children:[
        {
          path:'/stock/addGoods',
          name:"AddGoods",
          component:AddGoods,
        },
        {
          path:'/stock/serve',
          name:"Serve",
          component:Serve
        },
        {
          path: '/stock/addPets',//新增宠物    路由
          name: 'AddPets',
          component: AddPets,
        }
      ]
    },
    //cq

    {   // 通过对象进行描述
      path: '/register',
      name: 'Register',
      component: Register

    },


    {   // 平台管理 一级路由
      path: '/management',
      name: 'Management ',
      component: Management,
      children: [ // children 属性配置二级路径
        {
          path: '/management/users',  // GM  用户列表
          name: 'Users',
          component: Users,
        },
        {
          path: '/management/disabledUsers',  // GM  违规用户列表
          name: 'DisabledUsers',
          component: DisabledUsers,
        },
        {
          path: '/management/someRules',  // GM  用户须知 组件
          name: 'SomeRules',
          component: SomeRules,
        },
        {
          path: '/management/usersIntroduce',  // GM 用户详情
          name: 'UsersIntroduce',
          component: UsersIntroduce,
        },
        {
          path: '/management/auditing',   //GM 用户审批 路由
          name: 'Auditing',
          component: Auditing,
        },
        {
          path: '/management/stores',  // 门店 路由
          name: 'managementStores',
          component: Stores,
        }, {
          path: '/management/membersList', //宠主 路由
          name: MembersList,
          component: MembersList,
        }
      ]
    },


    {   // 通过对象进行描述
      path: '/management/:username',
      name: 'ManagementWithParams',
      // component: Management,
      component: () => import(/* webpackChunkName: "about" */ './views/management.vue')// 实现延迟加载
    },


    {   // 门店管理 一级路由
      path: '/storeManagement',
      name: 'StoreManagment',
      component: StoreManagment,
      children: [ // children 属性配置二级路径
        {
          path: '/storeManagement/AddService',
          name: 'AddService',
          component: AddService,
        },
        {
          path: '/storeManagement/FindService',
          name: 'FindService',
          component: FindService,
        },
        {
          path: '/storeManagement/AddShopService',
          name: 'AddShopService',
          component: AddShopService,
        },  
        {
          path: '/storeManagement/stores',
          name: 'storeManagementStores',
          component: Stores,
        },
        {
          path: '/storeManagement/addShopGoods',
          name: 'AddShopGoods',
          component: AddShopGoods,
        },
        {
          path: '/storeManagement/goodsList',
          name: 'GoodsList',
          component: GoodsList,
        },
        {
          path: '/storeManagement/ordersList',
          name: 'OrdersList',
          component: OrdersList,
        },
        {
          path: '/storeManagement/petsList',//宠物列表   路由
          name: "PetsList",
          component: PetsList,
        }]
    },
    {   // 通过对象进行描述
      path: '/storeManagement/:username',
      name: 'StoreManagementWithParams',
      // component: storeManagement,
      component: () => import(/* webpackChunkName: "about" */ './views/storeManagement.vue')// 实现延迟加载
    },


    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')// 实现延迟加载
    }
  ],

})
export default router;


