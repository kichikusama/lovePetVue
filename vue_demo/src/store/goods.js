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
            userId: ""
        },
        goodsFlag: {
            dialogImageUrl: "",
            dialogVisible: false,
        },
    },
    mutations: {
        onSubmit({ goods, commit }, payload) {
            const result = goodsSer.addGoods(goods);
            if (result) {
                Message.success("新增成功！");
                goods.goodsName = "";
                goods.goodsType = "";
                goods.goodsMaterial = "";
                goods.goodsCanFor = "";
                goods.goodsOnlyFor = "";
                goods.goodsSize = "";
                goods.goodsTaste = "";
                goods.goodsSpecial = "";
                goods.goodsRegion = "";
                goods.goodsDate = "";
                goods.goodsTime = "";
                goods.goodsSupplier = "";
                goods.goodsIntro = "";
                goods.goodsPrice = "";
                goods.goodsImg = "";
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
