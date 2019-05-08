import serPets from "../../servise/pets";

export default {
    namespaced: true,
    state: {
        pets:{
            currentPage: 1,
            eachPage: 3,

            petsSpecies:"", // 品称
            petsType:"", // 种类
            petsColor: "", // 颜色
            petsBirth:"", // 出生日期
            petsLevel:"", // 规格（成犬、幼犬等）
            petCharacter:"", // 性格
            petsWeight:"", // 体重（5kg、10kg等）
            petsImg:"", // 图片
        }
    },
    mutations: {
        addPets:(state,payload)=>{
            console.log(state);
            console.log(payload);
        },
        getPets: (state, payload) => {
            Object.assign(state, payload)
        },
        
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