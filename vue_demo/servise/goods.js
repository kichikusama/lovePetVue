const addGoods = async (data) => await fetch(`/goods/addGoods`,{
    headers: { 
        "Content-Type": "application/json"
    },
    method:'POST',
    body:  JSON.stringify(data)
}).then(response => response.json())


const getGoodsByPage = async ({ currentPage = 1, eachPage = 5 } = {}) => await fetch(`/goods/getGoodsByPage?currentPage=${currentPage}&eachPage=${eachPage}`).then(response => response.json());
const deleteGoodsByPage = async (data) => await fetch(`/goods/deleteGoodsByPage?data=${data}`).then(response => response.json());

const searchGoodsByType = async (data) => await fetch(`/goods/searchGoodsByType`,{
    headers: { 
        "Content-Type": "application/json"
    },
    method:'POST',
    body:  JSON.stringify(data)
}).then(response => response.json())


export default {
    addGoods,getGoodsByPage,deleteGoodsByPage,searchGoodsByType
}