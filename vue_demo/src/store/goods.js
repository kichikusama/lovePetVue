import goodsSer from "../../servise/goods";
export default ({
    // 命名空间 
    namespaced: true,
    state:{
        currentPage: '1', // 当前页面
        eachPage: '5', // 每页显示条数
        totalPage: '0', // 总页数
        count: '0', // 总条数
        goods: [], // 信息
    },
    mutations:{

        // getUsers(state,payload){    // 分页获取用户
        //     console.log(state);
        //     console.log(payload);
        //     Object.assign(state,payload);    
        //     // console.log(state);       
        // },
        // setEachPage:(state,eachPage) => {
        //     return state.eachPage = eachPage;
        // },
        // setCurrentPage:(state,currentPage) => {
        //     // console.log(currentPage);
            
        //     return state.currentPage = currentPage;
        // }
    },
    actions: {
        async addGoodsImage() {
        const data =  await fetch(`/goods/addGoodsImage`)
         .then(response => response.json());
        console.log(data);
        // commit('getUsers',data);
        },
    }
})
