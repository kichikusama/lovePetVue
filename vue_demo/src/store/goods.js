import goodsSer from "../../servise/goods";
import { Message } from 'element-ui';
export default ({
    // 命名空间 
    namespaced: true,
    state: {
        goods: {
            goodsName: "",
            goodsType: "",
            goodsMaterial: "",
            goodsCanFor: "",
            goodsOnlyFor: "",
            goodsSize: "",
            goodsTaste: "",
            goodsSpecial: "",
            goodsRegion: "",
            goodsDate: "",
            goodsTime: "",
            goodsSupplier: "",
            goodsIntro: "",
            goodsPrice: "",
            goodsImg: "",
        },
        goodsFlag: {
            dialogImageUrl: "",
            dialogVisible: false,
        },
        goodsList: {
            currentPage: '1', // 当前页面
            eachPage: '5', // 每页显示条数
            totalPage: '0', // 总页数
            count: '0', // 总条数
            goods: [], // 信息
        },
        a:1
    },
    mutations: {
        onSubmit(state, payload) {
            const result = goodsSer.addGoods(state.goods);
            if (result) {
                Message.success("新增成功！");

            } else {
                Message.warning("新增成功！")
            }
        },
        handleRemove(state, payload) {
            state.goods.goodsImg = "";
        },
        uploadSuccess(state, payload) {
            state.goods.goodsImg = payload.data.url;
        },
        getGoodsByPage: (state, payload) => {
            Object.assign(state, {goodsList:payload})
        },
        setEachPage: (state, eachPage) => {
            state.goodsList.currentPage = 1;
            state.goodsList.eachPage = eachPage
            console.log(state.goodsList.eachPage)
        },
        setCurrentPage: (state, currentPage) => state.goodsList.currentPage = currentPage
    },
    actions: {
        async getGoodsByPageAsync(context) {
            console.log(context.state.goodsList);
            const { currentPage, eachPage } = context.state.goodsList;
            const data = await goodsSer.getGoodsByPage({ currentPage, eachPage });
            console.log(data);
            context.commit("getGoodsByPage", data);
        }
    }
})
