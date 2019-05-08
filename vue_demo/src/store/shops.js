import shopServe from '../../servise/shops'


export default ({
    // 命名空间 
    namespaced: true,
    state: {
        state: {
            shopName: '',
            shopLicenceNum: '',
            shopLicenceImg: '',
            shopAdd: '',
            shopLocation: '',
            shopCorporate: '',
            shopTel: '',
            shopImg: '',
            shopFeature: '',
            shopCommission: '',
            shopEmployee: [],
        }
    },
    actions: {
       async applyStoreAsync({ commit, state }) {
           console.log(state.state)
         const data= await shopServe.addShops(state.state)
         console.log(11,data)
        },
    }
})