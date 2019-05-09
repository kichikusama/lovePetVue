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
    },
    actions: {

    }
})
