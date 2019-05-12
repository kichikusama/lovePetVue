import serPets from "../../servise/pets";
import { Message } from 'element-ui';
export default {
    namespaced: true,
    state: {
        total: 0,
        currentPage: 1,
        eachPage: 1,

        pets:[],
        data: {
            _id:"",
            petsSpecies: "", // 品称
            petsType: "", // 种类
            petsColor: "", // 颜色
            petsBirth: "", // 出生日期
            petsLevel: "", // 规格（成犬、幼犬等）
            petCharacter: "", // 性格
            petsWeight: "", // 体重（5kg、10kg等）
            petsImg: "", // 图片
        } , //数据
        petsData: {
            petsSpecies: "", // 品称
            petsType: "", // 种类
            petsColor: "", // 颜色
            petsBirth: "", // 出生日期
            petsLevel: "", // 规格（成犬、幼犬等）
            petCharacter: "", // 性格
            petsWeight: "", // 体重（5kg、10kg等）
            petsImg: "", // 图片
        }  //数据
    },
    mutations: {
        handleRemove: (state, payload) => {
            state.petsData.petsImg = ""
        },
        handleSuccess: (state, payload) => {
            state.petsData.petsImg = payload.data.url
        },
        submitForm(state, payload) {
            const result = serPets.addPets(state.petsData);
            if (result) {
                Message.success("新增成功！");
                state.petsData.petsSpecies="";
                state.petsData.petsType="";
                state.petsData.petsColor="";
                state.petsData.petsBirth="";
                state.petsData.petsLevel="";
                state.petsData.petCharacter="";
                state.petsData.petsWeight="";
                state.petsData.petsImg="";

            } else {
                Message.warning("新增失败！")
            }
        },

        handleClick(row) {
            console.log(row);
        },
        getPetsById(state, payload) {
            Object.assign(state, payload);
        },
        //分页获取数据
        getPetsByAllPage(state, payload) {
            Object.assign(state, payload);
        },
        setEachPage: (state, eachPage) => state.eachPage = eachPage,
        setCurPage: (state, currentPage) => state.currentPage = currentPage,
    },
    actions: {
        //通过Id获取数据
        async getPetsByIdAsync({ commit }, id) {
            const [result] = await serPets.getPetsById(id);
            commit("getPetsById", { data: result })
        },
        //分页获取数据
        async getPetsByAllPageAsync({ commit, state },search) {
            const data = await serPets.getAllPets({currentPage:state.currentPage,eachPage:state.eachPage,...search});
            commit("getPetsByAllPage", data);
        },
        //通过ID修改对应数据
        async updatePetsByIdAsync({ commit, state },id) {
            const data = await serPets.updatePetsById({data:state.data,_id:id});
            if(data){
                const result = await serPets.getAllPets({currentPage:state.currentPage,eachPage:state.eachPage,});
                commit("getPetsByAllPage", result);
            }
        },

        async deletePetByPageAsync({ dispatch }, data) {
            const result = await serPets.deletePetByPage(data);
            if (result) {
                Message.warning("修改成功！")
                dispatch("getPetsByAllPageAsync");
            } else {
                Message.warning("修改失败！")
            }

        },
    }
}