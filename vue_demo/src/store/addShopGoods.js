import goodsSer from "../../servise/goods";
import { Message } from 'element-ui';

export default ({
    // 命名空间 
    namespaced: true,
    state: {
        goods: [],
        goodsIds: []
    },
    mutations: {
        getGoods: (state, payload) => {
            Object.assign(state, { goods: payload });
        },
        setGoodsIds: (state, goodsIds) => {
            Object.assign(state, { goodsIds });
        }
    },
    actions: {
        async getGoodsByUserIdAsync({ commit, state }, data) {
            const result = await goodsSer.getGoodsByUserId(data);
            commit("getGoods", result);
        },
        async addShopIdToGoodsAsync({ commit, dispatch, goodsIds }, payload) {
            const result = await goodsSer.addShopIdToGoods(payload);
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
                dispatch("getGoodsByUserIdAsync", { userId, shopId:shopsId });
                commit("setGoodsIds", [])
            } else {
                Message.warning("新增成功！")
            }
        }
    }
})