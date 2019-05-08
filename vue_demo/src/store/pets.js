import serPets from "../../servise/pets";
import serGetPets from "../../servise/pets"
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
        }
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
        async getPetsByPage(state, payload){
            const result = await serGetPets.getPets();
            Object.assign(state, payload);
            console.log(state.pets);
            
            
            if (result) {
                Message.success("获取成功！");

            } else {
                Message.warning("获取失败！")
            }
        }
    },
    actions: {
        async getPetsByPageAsync(context) {
            const { currentPage, eachPage } = context.state;
            const data = await serPets.getPets({ currentPage, eachPage });
            console.log(data);
            context.commit("getPets", data);
        }
    }
}