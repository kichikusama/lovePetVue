import goodsSer from "../../servise/goods";
import { Message } from 'element-ui';
export default ({
    // 命名空间 
    namespaced: true,
    state: {
        currentPage: '1', // 当前页面
        eachPage: '5', // 每页显示条数
        totalPage: '0', // 总页数
        count: '0', // 总条数
        goods: [], // 信息
    },
    mutations: {
        getGoodsByPage: (state, payload) => {
            Object.assign(state, payload)
        },
        setEachPage: (state, eachPage) => {
            state.currentPage = 1;
            state.eachPage = eachPage
        },
        setCurrentPage: (state, currentPage) => state.currentPage = currentPage,
    },
    actions: {
        async getGoodsByPageAsync(context) {
            const { currentPage, eachPage } = context.state;
            const data = await goodsSer.getGoodsByPage({ currentPage, eachPage });
            context.commit("getGoodsByPage", data);
        },
        async deleteGoodsByPageAsync({ dispatch }, data) {
            const result = await goodsSer.deleteGoodsByPage(data);
            if (result) {
                dispatch("getGoodsByPageAsync");
            } else {
                Message.warning("修改成功！")
            }
        },
        async searchAsync({ dispatch }, data) {
           const result =  await goodsSer.searchGoodsByType(data);
           console.log(result);
           
          

        }
    }
})
