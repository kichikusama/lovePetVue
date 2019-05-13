const { ordersModel } = require("./Models/ordersModel.js");

module.exports.getOrdersByPage = async function ({ currentPage, eachPage, type, text, shopId }) {
    let count; // 获取总条数
    // 获取当前页数的电影信息
    let orders;
    if (text) {
        orders = await ordersModel
            .find({
                [type]: { $regex: [text], $options: '$i' },
                shopId
            })
            .skip((currentPage - 1) * eachPage).limit(eachPage - 0);
        let counts = await ordersModel
            .find({
                [type]: { $regex: [text], $options: '$i' },
                shopId
            })
        count = counts.length
    } else {
        orders = await ordersModel.find({ shopId }).skip((currentPage - 1) * eachPage).limit(eachPage - 0);
        let counts = await ordersModel.find({ shopId });
        count = counts.length
    }
    let pageData = {
        currentPage: currentPage - 0, // 当前页面
        eachPage, // 每页显示条数
        count, // 总条数
        orders, // 电影信息
    };
    return pageData;
}

module.exports.deleteOrdersById = async function (data) {
    return await ordersModel.deleteOne(data);
}