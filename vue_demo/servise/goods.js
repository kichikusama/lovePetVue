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
    },
    method: 'POST',
    body: JSON.stringify(data)
}).then(response => response.json())//查看所有门店（具有分页）

const deleteGoodsByPage = async (data) => await fetch(`/goods/deleteGoodsByPage`, {
    headers: {
        "Content-Type": "application/json",
    },
    method: 'POST',
    body: JSON.stringify(data)
}).then(response => response.json())

const getGoodsById = async (data) => await fetch(`/goods/getGoodsById`, {
    headers: {
        "Content-Type": "application/json",
    },
    method: 'POST',
    body: JSON.stringify(data)
}).then(response => response.json())

const updateGoodsById = async (data) => await fetch(`/goods/updateGoodsById`, {
    headers: {
        "Content-Type": "application/json",
    },
    method: 'POST',
    body: JSON.stringify(data)
}).then(response => response.json())

const getGoodsByUserId = async (data) => await fetch(`/goods/getGoodsByUserId`, {
    headers: {
        "Content-Type": "application/json",
    },
    method: 'POST',
    body: JSON.stringify(data)
}).then(response => response.json())


const addShopIdToGoods = async (data) => await fetch(`/goods/addShopIdToGoods`, {
    headers: {
        "Content-Type": "application/json",
    },
    method: 'POST',
    body: JSON.stringify(data)
}).then(response => response.json())


export default {
    addGoods, getGoodsByPage,
    deleteGoodsByPage, getGoodsById,
    updateGoodsById, getGoodsByUserId,
    addShopIdToGoods
}