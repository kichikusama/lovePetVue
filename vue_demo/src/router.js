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
      path: '/register',
      name: 'Register',
      component: Register

    },
    {   // 通过对象进行描述
      path: '/management',
      name: 'Management ',
      component: Management ,
      children:[ // children 属性配置二级路径
        {
          path:'/management/users',  // 用户列表 路由
          name:Users,
          component:Users,
        },
        {
          path:'/management/auditing',   // 用户审批 路由
          name:Auditing,
          component:Auditing,
        },
        {
          path:'/management/stores',  // 门店 路由
          name:Stores,
          component:Stores,
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
      name: 'StoreManagment ',
      component: StoreManagment ,
      children:[ // children 属性配置二级路径
        {
          path:'/storeManagement/users',
          name:Users,
          component:Users,
        },
        {
          path:'/storeManagement/stores',
          name:Stores,
          component:Stores,
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


