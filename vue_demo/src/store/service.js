import serServuse from "../../servise/service";

export default {
    namespaced: true,
    state: {
        currentPage: "1",
        eachPage: "10", // 每页显示条数
        totalPage: "0", // 总页数
        count: "0", // 总条数
        rows: [], // 服务信息
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
            console.log(state);
            console.log(payload);
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
            await serServuse.addService(state.state.service)
        },
        async getService(context) {
            const {
                currentPage,
                eachPage
            } = context.state;
            const data = await serServuse.getService({
                currentPage,
                eachPage
            });
            console.log(data);
            context.commit("getService", data);
        }
    }
}