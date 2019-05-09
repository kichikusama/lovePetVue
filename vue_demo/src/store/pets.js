import serPets from "../../servise/pets";
import { Message } from 'element-ui';
export default {
    namespaced: true,
    state: {
        pets: {
            currentPage: 1,
            eachPage: 3,

            petsSpecies: "", // 品称
            petsType: "", // 种类
            petsColor: "", // 颜色
            petsBirth: "", // 出生日期
            petsLevel: "", // 规格（成犬、幼犬等）
            petCharacter: "", // 性格
            petsWeight: "", // 体重（5kg、10kg等）
            petsImg: "", // 图片
        },
        data:[]  //数据
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
        getPetsByPage(state, payload){
            Object.assign(state.data,payload );
        }
    },
    actions: {
        async getPetsByPageAsync(context) {
            const data = await serPets.getPets();
            context.commit("getPetsByPage", data);
        },
    
        async deletePetByPageAsync({dispatch} ,data) {
            const result = await serPets.deletePetByPage(data);
            
            if (result) {
                Message.warning("修改成功！")
                dispatch("getPetsByPageAsync");
            } else {
                Message.warning("修改失败！")
            }
            
        },
    }
}