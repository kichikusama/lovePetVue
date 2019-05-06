
export default ({
    // 命名空间 
    namespaced: true,
    state:{
       messages:[],
    },
    mutations:{
        getMessages(state,payload){
            console.log(state);
            // console.log(payload);
            Object.assign(state,{messages:payload});    // 将数据加进state
            console.log(state);       
        },
        // setEachPage:(state,eachPage) => {
        //     return state.eachPage = eachPage;
        // },
        // setCurrentPage:(state,currentPage) => {
        //     // console.log(currentPage);
            
        //     return state.currentPage = currentPage;
        // }
    },
    actions: {
        // 获取会话列表
        async messagestAsync({ commit ,state}) {           
        const data =  await fetch(`/messages/getMessages`)
         .then(response => response.json());
        // console.log(data);
        commit('getMessages',data);
        },
        // 新增会话
        async addMessageAsync( { commit,state } ){
            console.log(commit);
            console.log(state);
            
            
            // const isdone = await fetch(``)
        }
    }
})
