import petsSer from "../../servise/pets";
import { Message } from 'element-ui';

export default ({
    // 命名空间 
    namespaced: true,
    state: {
        pets: [],
        petsIds: []
    },
    mutations: {
        getPets: (state, payload) => {
            Object.assign(state, { pets: payload });
        },
        setPetsIds: (state, petsIds) => {
            Object.assign(state, { petsIds });
        }
    },
    actions: {
        async getPetsByUserIdAsync({ commit, state }, data) {
            const result = await petsSer.getPetsByUserId(data);
            commit("getPets", result);
        },
        async addShopIdToPetsAsync({ commit, dispatch, petsIds }, payload) {
            const result = await petsSer.addShopIdToPets(payload);
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
                dispatch("getPetsByUserIdAsync", { userId, shopId:shopsId });
                commit("setPetsIds", [])
            } else {
                Message.warning("新增成功！")
            }
        }
    }
})