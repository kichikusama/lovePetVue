import usersService from '../../servise/users';
import shopService from '../../servise/shops';
export default ({
    // 命名空间 
    namespaced: true,
    state: {
        currentPage: '1', // 当前页面
        eachPage: '5', // 每页显示条数
        totalPage: '0', // 总页数
        count: '0', // 总条数
        rows: [], // 信息
        usersIndroduce: {}, // 用户详情需要使用
        isLogin:false,  // 登录状态
        auditingUsers:[],
        shops:[], // 门店数据
    },
    mutations: {
        isLogin:(state,payload)=>{
            // console.log(payload);
            
            return state.isLogin = payload
            //  Object.assign(state.isLogin = payload)  // 登录状态修改
        },
        getUsers(state, payload) {    // 分页获取用户
            // console.log(state);
            // console.log(payload);
            Object.assign(state, payload);
            // console.log(state);       
        },
        setEachPage: (state, eachPage) => {
            return state.eachPage = eachPage;
        },
        setCurrentPage: (state, currentPage) => {
            // console.log(currentPage);

            return state.currentPage = currentPage;
        },
        // 将 所点击用户的信息保存在状态机中
        setUsersIntroduce: (state, userNow) => {  // 第二个参数 为 传递的参数，传什么就是什么
            // console.log(state);
            Object.assign(state, { usersIndroduce: userNow })
            // return state.usersIndroduce = userNow;      
        },
        searchUser:(state,payload)=>{
            Object.assign(state,{rows:payload})
        },
        getAuditingUsers:(state,payload)=>{
            Object.assign(state,{auditingUsers:payload})
        },
        getShopsByUserId:(state,payload)=>{  // 设置门店数据
            Object.assign(state,{shops:payload});
        }
    },
    actions: {
        // 登录 //按姓名和密码查找用户
        async loginAsync({ commit, state },user) {
            const inUser = await usersService.loginUser(user);
            // console.log("data:"+data);
            return inUser;
            // commit("isLogin",isLogin);
        },
        // 分页获取用户
        async usersListAsync({ commit, state }) {
            const data = await usersService.getUsers({ currentPage: state.currentPage, eachPage: state.eachPage });
            // console.log(data);
            commit('getUsers', data);
        },
          // 获取 待审批 用户
          async auditingUsersAsync({ commit, state }) {
            const data = await usersService.auditingUsers();
            console.log(data);
            commit('getAuditingUsers', data);
        },
        // 按条件搜索用户
        async searchUserAsync({ commit, state },info) {              
            const data = await usersService.searchUser(info);
            // console.log(data);
            commit('searchUser', data);
        },
         // 新增用户
         async addUserAsync({ commit, state },add) {  
             console.log(add);
                         
            const isRegister = await usersService.addUser(add);
            return isRegister;     
           
        },
        // 删除用户
        async deleteUserAsync({ dispatch }, rows) {
            const id = rows._id; // 所删除用户的 id
            const data = await fetch(`/users/deleteUserById?_id=${id}`)
                .then(response => response.json());
            // dispatch 触发 actions, commit 触发 mutations
            if (data) {
                dispatch("usersListAsync"); // 删除成功后 重新 fetch 请求数据
            }
        },
        // 根据用户 id 获取门店信息
        async getShopsAsync({ commit, state },info) { 
            // console.log(info);                       
            // const data = await usersService.getShops(info);
            const data = await shopService.getShopsBypage(info);
            console.log(data);
            commit('getShopsByUserId', data.shops);
        },
    }
})
