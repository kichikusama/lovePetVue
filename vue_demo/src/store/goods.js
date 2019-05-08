import goodsSer from "../../servise/goods";
export default ({
    // 命名空间 
    namespaced: true,
    state: {
        goods: {
            name: "",
            type: "",
            material: "",
            canFor: "",
            onlyFor: [],
            size: "",
            taste: [],
            special: [],
            region: "",
            date: "",
            time: "",
            supplier: "",
            intro: "",
            price: "",
            img: "",
            src: "",
            dialogImageUrl: "",
            dialogVisible: false,
            flag: true,
        }
        // currentPage: '1', // 当前页面
        // eachPage: '5', // 每页显示条数
        // totalPage: '0', // 总页数
        // count: '0', // 总条数
        // goods: [], // 信息
    },
    mutations: {
        onSubmit(state, payload) {
            
        },
        handleRemove(state, payload) {
            state.goods.src = "";
        },
        uploadSuccess(state, payload) {
            state.goods.src = payload.data.url;
        },
    },
    actions: {
        async addGoods() {

        }
    }
})
