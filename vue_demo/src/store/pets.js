import serPets from "../../servise/pets";
import { Message } from 'element-ui';
export default {
    namespaced: true,
    state: {
        total: 0,
        currentPage: 1,
        eachPage: 1,

        pets:[ {
            petsSpecies: "", // 品称
            petsType: "", // 种类
            petsColor: "", // 颜色
            petsBirth: "", // 出生日期
            petsLevel: "", // 规格（成犬、幼犬等）
            petCharacter: "", // 性格
            petsWeight: "", // 体重（5kg、10kg等）
            petsImg: "", // 图片
        }],
        data: []  //数据
    },
    mutations: {
        handleRemove: (state, payload) => {
            state.pets.petsImg = ""
        },
        handleSuccess: (state, payload) => {
            state.pets.petsImg = payload.data.url
        },
        submitForm(state, payload) {
            const result = serPets.addPets(state.pets);
            if (result) {
                Message.success("新增成功！");

            } else {
                Message.warning("新增失败！")
            }
        },

        handleClick(row) {
            console.log(row);
        },
        // getPetsByPage(state, payload) {
        //     Object.assign(state.data, payload);
        // },
        //分页获取数据
        getPetsByAllPage(state, payload) {
            Object.assign(state, payload);
        },
        setEachPage: (state, eachPage) => state.eachPage = eachPage,
        setCurPage: (state, currentPage) => state.currentPage = currentPage,
    },
    actions: {
        // async getPetsByPageAsync(context) {
        //     const data = await serPets.getPets();
        //     context.commit("getPetsByPage", data);
        // },
        //分页获取数据
        async getPetsByAllPageAsync({ commit, state },search) {
            const data = await serPets.getAllPets({currentPage:state.currentPage,eachPage:state.eachPage,...search});
            console.log(data);
            
            commit("getPetsByAllPage", data);
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