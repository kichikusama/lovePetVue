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
    },
    mutations: {
        onSubmit(state, payload) {
            // 使用深拷贝将管理员 id 加在 state 上
            const result = goodsSer.addGoods(state.goods);
            if (result) {
                Message.success("新增成功！");
                state.goods.goodsName = "";
                state.goods.goodsType = "";
                state.goods.goodsMaterial = "";
                state.goods.goodsCanFor = "";
                state.goods.goodsOnlyFor = "";
                state.goods.goodsSize = "";
                state.goods.goodsTaste = "";
                state.goods.goodsSpecial = "";
                state.goods.goodsRegion = "";
                state.goods.goodsDate = "";
                state.goods.goodsTime = "";
                state.goods.goodsSupplier = "";
                state.goods.goodsIntro = "";
                state.goods.goodsPrice = "";
                state.goods.goodsImg = "";
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
    },
    actions: {

    }
})
