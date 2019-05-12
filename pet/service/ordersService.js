const { getOrdersByPage,deleteOrdersById } = require('../dao/ordersDao.js');

module.exports.getOrdersByPage = async function (orders) {
    return await getOrdersByPage(orders);
}

module.exports.deleteOrdersById = async function (orders) {
    const result = await deleteOrdersById(orders);
    if (result.ok) {
        return true;
    } else {
        return false;
    }
}