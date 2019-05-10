const addGoods = async (data) => await fetch(`/goods/addGoods`, {
    headers: {
        "Content-Type": "application/json"
    },
    method: 'POST',
    body: JSON.stringify(data)
}).then(response => response.json())

const getGoodsByPage = async (data) => await fetch(`/goods/getGoodsByPage`, {
    headers: {
        "Content-Type": "application/json",
        // 'Accept':"application/json",
    },
    method: 'POST',
    body: JSON.stringify(data)
}).then(response => response.json())//查看所有门店（具有分页）
// const getGoodsByPage = async ({ currentPage = 1, eachPage = 5 } = {}) => await fetch(`/goods/getGoodsByPage?currentPage=${currentPage}&eachPage=${eachPage}`).then(response => response.json());
const deleteGoodsByPage = async (data) => await fetch(`/goods/deleteGoodsByPage?data=${data}`).then(response => response.json());
const getGoodsById = async (_id) => await fetch(`/goods/getGoodsById?_id=${_id}`).then(response => response.json());

const updateGoodsById = async (data) => await fetch(`/goods/updateGoodsById`, {
    headers: {
        "Content-Type": "application/json",
        // 'Accept':"application/json",
    },
    method: 'POST',
    body: JSON.stringify(data)
}).then(response => response.json())

const getGoodsByUserId = async (userId) => await fetch(`/goods/getGoodsByUserId?userId=${userId}`).then(response => response.json());

const addShopIdToGoods = async (data) => await fetch(`/goods/addShopIdToGoods`, {
    headers: {
        "Content-Type": "application/json",
        // 'Accept':"application/json",
    },
    method: 'POST',
    body: JSON.stringify(data)
}).then(response => response.json())





export default {
    addGoods, getGoodsByPage, 
    deleteGoodsByPage, getGoodsById,
    updateGoodsById,getGoodsByUserId,
    addShopIdToGoods
}