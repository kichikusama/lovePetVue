import serServuse from "../../servise/service";

export default {
    namespaced: true,
    state: {
        currentPage: "1",
        eachPage: "10", // 每页显示条数
        totalPage: "0", // 总页数
        count: "0", // 总条数
        data:[],
        service: {
            serviceName: "",
            serviceType: "",
            serviceSchedule: "",
            serviceCanFor: "",
            serviceDetial: "",
            serviceTime: "",
            serviceLevel: "",
            servicePrice: ""
        }
    },

    mutations: {
        getService: (state, payload) => {
            Object.assign(state, payload)
        },
        setEachPage: (state, eachPage) => {
            return state.eachPage = eachPage;
        },
        setCurrentPage: (state, currentPage) => {
            return state.currentPage = currentPage;
        }
    },
    actions: {
        async onSubmit(state, payload) {
            await serServuse.addService(state.state.service);
        },
        async getServiceAsync(context) {
            const data = await serServuse.getService(context.state.service)
            context.commit("getService", data);
        },
        async deteleServiceAsync({ dispatch,commit, state },id) {
            const data = await serServuse.deteleService(id)
            if(data.ok==1){
                dispatch("getServiceAsync")
            }
        },//删除指定服务
        async getAllServiceAsync({ commit, state },search) {
            const data = await serServuse.getServiceBypage({currentPage:state.currentPage,eachPage:state.eachPage,...search})
            commit("getService", data)
        },//获取所有服务(具有分页)
    }
}