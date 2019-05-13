import membersService from '../../servise/members';
export default ({
    // 命名空间
    namespaced: true,
    state: {
        total: 0,
        currentPage: 1,
        eachPage: 5,//每页显示条数
        members: [], // 宠主集合  数组包对象 
    },
    mutations: {
        getMembers: (state, payload) => {
            Object.assign(state, payload)
        },//设置 所有宠主 信息
        setEachPage: (state, eachPage) => state.eachPage = eachPage,
        setCurPage: (state, currentPage) => state.currentPage = currentPage,
        //    setUserId:(state,userId)=>  state.userId = userId
    },
    actions: {
                // async applyStoreAsync({ commit, state },shop) {
        //     await shopServe.addShops(shop)
        // },//增加门店
        async getMembersAsync({ commit, state },search) {
            const data = await membersService.getMembersBypage({currentPage:state.currentPage,eachPage:state.eachPage,...search})
            console.log(data);
            
            commit("getMembers", data)
        },//获取所有门店(具有分页)
        // async deteleShopsAsync({ dispatch,commit, state },id) {
        //     const data = await shopServe.deteleShops(id)
        //     if(data.ok==1){
        //         dispatch("getShopsAsync")
        //     }
        //     // commit("getShops", data)
        // },//删除指定门店
        // async getAllShopsAsync({ commit, state },useId) {
        //     const data = await shopServe.getShops(useId)
        //     commit("getAllShops", data)
        // },//获取所有门店(具有分页)

        // async revisionAsync({ dispatch,commit, state },shopId) {
        //     const data = await shopServe.revisionShop(shopId)
        //     console.log(data)
        //     if(data.n==1){
        //         console.log('xx')
        //         dispatch("getShopsAsync")
        //     }
        // },//修改指定门店
    }
})




// import memberService from '../../servise/members';

// export default ({
//     // 命名空间 
//     namespaced: true,
//     state: {
//         total:0,
//         currentPage:1,
//         eachPage:5,//每页显示条数
//         members:[], // 宠主集合  数组包对象 
//     },
//     mutations: {
//         getMembers: (state, payload) => {
//             Object.assign(state, payload)
//         },//设置 所有宠主 信息
//         setEachPage: (state, eachPage) => state.eachPage = eachPage,
//        setCurPage:(state,currentPage)=>  state.currentPage = currentPage,
//     //    setUserId:(state,userId)=>  state.userId = userId
//     },
//     actions: {
//         // async applyStoreAsync({ commit, state },shop) {
//         //     await shopServe.addShops(shop)
//         // },//增加门店
//         async getMembersAsync({ commit, state }) {
//             const data = await memberService.getMembersBypage({currentPage:state.currentPage,eachPage:state.eachPage})
//             commit("getMembers", data)
//         },//获取所有门店(具有分页)
//         // async deteleShopsAsync({ dispatch,commit, state },id) {
//         //     const data = await shopServe.deteleShops(id)
//         //     if(data.ok==1){
//         //         dispatch("getShopsAsync")
//         //     }
//         //     // commit("getShops", data)
//         // },//删除指定门店
//         // async getAllShopsAsync({ commit, state },useId) {
//         //     const data = await shopServe.getShops(useId)
//         //     commit("getAllShops", data)
//         // },//获取所有门店(具有分页)

//         // async revisionAsync({ dispatch,commit, state },shopId) {
//         //     const data = await shopServe.revisionShop(shopId)
//         //     console.log(data)
//         //     if(data.n==1){
//         //         console.log('xx')
//         //         dispatch("getShopsAsync")
//         //     }
//         // },//修改指定门店
//     }
// })