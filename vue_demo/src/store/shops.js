import shopServe from '../../servise/shops'


export default ({
    // 命名空间 
    namespaced: true,
    state: {
        total:0,
        currentPage:1,
        eachPage:5,//每页显示条数
        shops:[],
    },
    actions: {
        async applyStoreAsync({ commit, state }) {
            console.log(state.state)
            const data = await shopServe.addShops(state.state)
            console.log(11, data)
        },
        setEachPage: (state, eachPage) => state.eachPage = eachPage,
       setCurPage:(state,currentPage)=>  state.currentPage = currentPage, 
    },
    actions: {
        async applyStoreAsync({ commit, state },shop) {
            await shopServe.addShops(shop)
        },//增加门店
        async getShopsAsync({ commit, state },) {
            const data = await shopServe.getShops({currentPage:state.currentPage,eachPage:state.eachPage})
            commit("getShops", data)
        },//获取所有门店
        async deteleShopsAsync({ dispatch,commit, state },id) {
            const data = await shopServe.deteleShops(id)
            if(data.ok==1){
                dispatch("getShopsAsync")
            }
            // commit("getShops", data)
        },//删除指定门店
    }
})