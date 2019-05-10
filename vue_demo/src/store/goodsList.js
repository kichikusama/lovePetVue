import goodsSer from "../../servise/goods";
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
export default ({
    // 命名空间 
    namespaced: true,
    state: {
        currentPage: '1', // 当前页面
        eachPage: '5', // 每页显示条数
        totalPage: '0', // 总页数
        count: '0', // 总条数
        goods: [], // 信息
        form: {
            _id: "",
            goodsName: "",
            goodsSize: "",
            goodsSupplier: "",
            goodsPrice: ""
        },
        dialogFormVisible: false,
    },
    mutations: {
        getGoodsByPage: (state, payload) => {
            Object.assign(state, payload);
        },
        setEachPage: (state, eachPage) => {
            state.currentPage = 1;
            state.eachPage = eachPage
        },
        setCurrentPage: (state, currentPage) => state.currentPage = currentPage,
    },
    actions: {
        async getGoodsByPageAsync({ commit, state }, search) {
            const data = await goodsSer.getGoodsByPage({ currentPage: state.currentPage, eachPage: state.eachPage, shopId, ...search });
            commit("getGoodsByPage", data);
        },
        async deleteGoodsByPageAsync({ dispatch, shopId }, data) {
            const result = await goodsSer.deleteGoodsByPage(data);
            if (result) {
                dispatch("getGoodsByPageAsync");
            } else {
                Message.warning("修改成功！")
            }
        },
        async getGoodsByIdAsync({ commit }, id) {
            const [result] = await goodsSer.getGoodsById({ shopId, _id: id });
            commit("getGoodsByPage", { form: result })
        },
        async updateGoodsByIdAsync({ state, commit,dispatch }, payload) {
            const result = await goodsSer.updateGoodsById({ data: state.form, _id: payload })
            if (result) {
                dispatch("getGoodsByPageAsync");
            }
        }
    }
})
