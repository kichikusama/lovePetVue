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
            Object.assign(state, {data:payload})
        },
        // setEachPage: (state, eachPage) => {
        //     return state.eachPage = eachPage;
        // },
        // setCurrentPage: (state, currentPage) => {
        //     return state.currentPage = currentPage;
        // }
    },
    actions: {
        async onSubmit(state, payload) {
            await serServuse.addService(state.state.service)
        },
        async getServiceAsync(context) {
            const data = await serServuse.getService(context.state.service)
            // const {
            //     currentPage,
            //     eachPage
            // } = context.state;
            // const data = await serServuse.getService({currentPage,eachPage});
            // console.log(data);
            context.commit("getService", data);
        }
    }
}