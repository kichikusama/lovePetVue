import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Login from './views/login.vue';
import Register from './views/register.vue';
import Management from './views/management.vue'; // 平台管理员 主界面
import StoreManagment from './views/storeManagement.vue'; // 门店管理员 界面

import Users from './components/users/users.vue'; // 用户管理 组件
import Auditing from './components/users/usersAuditing.vue'; // 用户审批 组件
import Stores from './components/stores/stores.vue'; // 门店管理 组件
import AddService from './components/service/addService.vue';// 新增服务 组件
import FindService from './components/service/findService.vue';// 查询服务 组件

import chooseServe from './views/chooseServe';//选择界面(新增门店，进入门店，进货管理)
import addStore from './views/addStore';//新增门店
import stock from './views/stock';//进货管理

import AddGoods from "./components/goods/addGoods" // 门店管理 新增商品
import GoodsList from "./components/goods/goodsList" // 门店管理 商品列表
import MembersList from './components/members/membersList.vue';//宠主列表

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


    {   // 通过对象进行描述
      path: '/chooseServe', // 接收参数
      name: 'chooseServe',
      component: chooseServe
    },
    {   // 通过对象进行描述
      path: '/addStore', // 接收参数
      name: 'addStore',
      component: addStore
    },
    {   // 通过对象进行描述
      path: '/stock', // 接收参数
      name: 'stock',
      component: stock
    },

    {   // 通过对象进行描述
      path: '/register',
      name: 'Register',
      component: Register

    },


    {   // 通过对象进行描述
      path: '/management',
      name: 'Management ',
      component: Management,
      children: [ // children 属性配置二级路径
        {
          path: '/management/users',
          name: 'Users',
          component: Users,
        },
        {
          path: '/management/stores',
          name: 'Stores',
          component: Stores,
        },
        {
          path: '/management/auditing',   // 用户审批 路由
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


    {   // 通过对象进行描述
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
          path: '/storeManagement/stores',
          name: 'storeManagementStores',
          component: Stores,
        },
        {
          path: '/storeManagement/addGoods',
          name: 'AddGoods',
          component: AddGoods,
        },
        {
          path: '/storeManagement/goodsList',
          name: 'GoodsList',
          component: GoodsList,
        },
        {
          path: '/storeManagement/petsList',//宠物列表   路由
          name: PetsList,
          component: PetsList,
        },
        {
          path: '/storeManagement/addPets',//新增宠物    路由
          name: 'AddPets',
          component: AddPets,
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


