const getOrdersByPage = async (data) => await fetch(`/orders/getOrdersByPage`, {
    headers: {
        "Content-Type": "application/json",
    },
    method: 'POST',
    body: JSON.stringify(data)
}).then(response => response.json())//查询商品+分页

const deleteOrdersById = async (data) => await fetch(`/orders/deleteOrdersById`, {
    headers: {
        "Content-Type": "application/json",
    },
    method: 'POST',
    body: JSON.stringify(data)
}).then(response => response.json())//查询商品+分页



export default {
    getOrdersByPage, deleteOrdersById
}
