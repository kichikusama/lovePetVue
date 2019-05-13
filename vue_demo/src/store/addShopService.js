import serviceSer from "../../servise/service";
import { Message } from 'element-ui';

export default ({
    // 命名空间 
    namespaced: true,
    state: {
        service: [],
        serviceIds: []
    },
    mutations: {
        getService: (state, payload) => {
            Object.assign(state, { service: payload });
        },
        setServiceIds: (state, serviceIds) => {
            Object.assign(state, { serviceIds });
        }
    },
    actions: {
        async getServiceByUserIdAsync({ commit, state }, data) {
            const result = await serviceSer.getServiceByUserId(data);
            commit("getService", result);
        },
        async addShopIdToServiceAsync({ commit, dispatch, serviceIds }, payload) {
            const result = await serviceSer.addShopIdToService(payload);
            if (result) {
                Message.success("新增成功！");
                let userId;
                let shopsId;
                for (let item of document.cookie) {
                    if (item == ";") {
                        var ca = document.cookie.split(";");
                        userId = ca[0].split("=")[1];
                        shopsId = ca[1].split("=")[1];
                        break;
                    } else if (item == "=") {
                        userId = document.cookie.split("=")[1];
                    }
                }
                dispatch("getServiceByUserIdAsync", { userId, shopId:shopsId });
                commit("setServiceIds", [])
            } else {
                Message.warning("新增成功！")
            }
        }
    }
})