


export default ({
    // 命名空间 
    namespaced: true,
    state:{
        currentPage: '1', // 当前页面
        eachPage: '4', // 每页显示条数
        totalPage: '0', // 总页数
        count: '0', // 总条数
        rows: [], // 信息
    },
    mutations:{
        getUsers(state,payload){    // 分页获取用户
            // console.log(state);
            // console.log(payload);
            Object.assign(state,payload);    
            // console.log(state);       
        },
        setEachPage:(state,eachPage) => {
            return state.eachPage = eachPage;
        },
        setCurrentPage:(state,currentPage) => {
            // console.log(currentPage);
            
            return state.currentPage = currentPage;
        },
        // handleDelete:(state,payload)=>{  // 根据_id 删除用户
        //     console.log(payload);
            
        //       return payload._id;
        // }
        // handleUpdate(state,payload) {   // 修改用户信息
        //     console.log(state);
            
        //     console.log(payload);  // 所点击的用户所有信息 对象
        //     // console.log(rows);         
        // },
    },
    actions: {
        async usersListAsync({ commit ,state}) {
        const data =  await fetch(`/users/getUsers?currentPage=${state.currentPage}&eachPage=${state.eachPage}`)
         .then(response => response.json());
        // console.log(data);
        commit('getUsers',data);
        },
        async deleteUserAsync({ dispatch },rows){
             const id = rows._id; // 所删除用户的 id
             const data =  await fetch(`/users/deleteUserById?_id=${id}`)
             .then(response => response.json());
             // dispatch 触发 actions, commit 触发 mutations
             if(data){
                dispatch("usersListAsync"); // 删除成功后 重新 fetch 请求数据
             }
        }
    }
})
