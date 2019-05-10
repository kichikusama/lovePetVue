const { addGoods, getGoodsByPage,
    deleteGoodsByPage, getGoodsById,
    updateGoodsById, getGoodsByUserId,
    addShopIdToGoods } = require('../dao/goodsDao.js');

module.exports.addGoods = async function (data) {
    const result = await addGoods(data);
    if (result) {
        return true;
    } else {
        return false;
    }
}

module.exports.getGoodsByPage = async function (goods) {
    return await getGoodsByPage(goods);
}

module.exports.deleteGoodsByPage = async function (data) {
    const result = await deleteGoodsByPage(data);
    if (result.ok) {
        return true
    } else {
        return false;
    }
}

module.exports.getGoodsByPage = async function (goods) {
    return await getGoodsByPage(goods);
}

module.exports.getGoodsById = async function (goods) {
    return await getGoodsById(goods);
}

module.exports.updateGoodsById = async function (data) {
    const result = await updateGoodsById(data);
    if (result.ok) {
        return true
    } else {
        return false;
    }
}

module.exports.getGoodsByUserId = async function (userId) {
    return await getGoodsByUserId(userId);
}

module.exports.addShopIdToGoods = async function (data) {
    const result = await addShopIdToGoods(data);
    if (result.ok) {
        return true
    } else {
        return false;
    }
}