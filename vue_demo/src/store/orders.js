import orderSer from "../../servise/orders";
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
        orders: [], // 信息
    },
    mutations: {
        getOrdersByPage: (state, payload) => {
            Object.assign(state, payload);
        },
        setEachPage: (state, eachPage) => {
            state.currentPage = 1;
            state.eachPage = eachPage
        },
        setCurrentPage: (state, currentPage) => state.currentPage = currentPage,
    },
    actions: {
        async getOrdersByPageAsync({ commit, state }, search) {
            const data = await orderSer.getOrdersByPage({ currentPage: state.currentPage, eachPage: state.eachPage, shopId, ...search });
            console.log(data);

            commit("getOrdersByPage", data);
        },
        async deleteOrdersByIdAsync({ dispatch, state }, data) {
            const result = orderSer.deleteOrdersById(data);
            console.log(result);
            dispatch("getOrdersByPageAsync", shopId)
        },
    }
})

