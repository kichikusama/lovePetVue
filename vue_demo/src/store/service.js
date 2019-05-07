import serServuse from "../../servise/service";

export default {
    namespaced: true,
    state: {
        currentPage: "1",
        eachPage: "10", // 每页显示条数
        totalPage: "0", // 总页数
        count: "0", // 总条数
        rows: [], // 服务信息
    },
    mutations: {
        addService:(state,payload)=>{
            console.log(state);
            console.log(payload);
        },
        getService: (state, payload) => {
            console.log(state);
            console.log(payload);
            Object.assign(state, payload)
        },
        setEachPage: (state, eachPage) => {
            return state.eachPage = eachPage;
        },
        setCurrentPage: (state, currentPage) => {return state.currentPage = currentPage;}
    },
    actions: {
        async getServiceByPageAsync(context) {
            const { currentPage, eachPage } = context.state;
            const data = await serServuse.getService({ currentPage, eachPage });
            console.log(data);
            context.commit("getService", data);
        }
    }
}