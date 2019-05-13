import serServuse from "../../servise/service";
import { Message } from 'element-ui';
let userId;
let shopId;
for (let item of document.cookie) {
    if (item == ";") {
        var ca = document.cookie.split(";");
        userId = ca[0].split("=")[1];
        shopId = ca[1].split("=")[1];
        break;
    } else if (item == "=") {
        userId = document.cookie.split("=")[1];
    }
}
export default {
    namespaced: true,
    state: {
        currentPage: "1",
        eachPage: "10", // 每页显示条数
        totalPage: "0", // 总页数
        count: "0", // 总条数
        gg:[],
        service: {
            serviceName: "",
            serviceType: "",
            serviceSchedule: "",
            serviceCanFor: "",
            serviceDetial: "",
            serviceTime: "",
            serviceLevel: "",
            servicePrice: "",
            userId:"",
            shopId:[],
        },
        form: {
            _id: "",
            serviceName: "",
            serviceType: "",
            serviceDetial: "",
            servicePrice: ""
        },
        dialogFormVisible: false,
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
            state.state.service.userId=userId
            const result = await serServuse.addService(state.state.service);
            if (result) {
                Message.success("新增成功！");
                state.state.serviceName = "";
                state.state.serviceType = "";
                state.state.serviceSchedule = "";
                state.state.serviceCanFor = "";
                state.state.serviceDetial = "";
                state.state.serviceTime = "";
                state.state.serviceLevel = "";
                state.state.servicePrice = "";
            } else {
                Message.warning("新增成功！")
            }
        },
        async getServiceAsync(context) {
            const data = await serServuse.getService(context.state.service)
            context.commit("getService", data);
        },
        async deleteServiceByPageAsync({ dispatch, shopId }, data) {
            const result = await serServuse.deleteServiceByPage(data);
            if (result) {
                dispatch("getAllServiceAsync");
            } else {
                Message.warning("修改成功！")
            }
        },
        
        async getAllServiceAsync({ commit, state },search) {
            const data = await serServuse.getServiceByPage({currentPage:state.currentPage,eachPage:state.eachPage,shopId,...search})
            commit("getService", data)
        },//获取所有服务(具有分页)

        async getServiceByIdAsync({ commit }, id) {
            const [result] = await serServuse.getServiceById({ shopId, _id: id });
            commit("getService", { form: result })
        },

        async updateServiceByIdAsync({ state, commit }, payload) {
            const result = await serServuse.updateServiceById({ data: state.form, _id: payload })
            if (result) {
                dispatch("getAllServiceAsync");
            }
        }
    }
}