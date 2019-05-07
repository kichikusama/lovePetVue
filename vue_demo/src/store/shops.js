


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
            shopEmployee: '',
        }
    },
    actions: {
       async applyStoreAsync({ commit, state }) {
            const data =  await fetch(`/users/getUsers?currentPage=${state.currentPage}&eachPage=${state.eachPage}`)
             .then(response => response.json());
            console.log(state.state);
            commit('getUsers',data);
        },
    }
})