const { goodsModel } = require("./Models/goodsModel.js");

module.exports.addGoods = async function (data) {
    return await goodsModel.create(data);
}
module.exports.getGoodsByPage = async function ({ currentPage, eachPage }) {
    let count = await goodsModel.countDocuments(); // 获取总条数
    let totalPage = Math.ceil(count / eachPage); // 
    // 获取当前页数的学生信息
    let goods = await goodsModel
        .find()
        .skip((currentPage - 1) * eachPage)
        .limit(eachPage - 0)

    let goodsData = {
        currentPage: currentPage - 0, // 当前页面
        eachPage, // 每页显示条数
        totalPage, // 总页数
        count, // 总条数
        goods, // 商品信息
    };
    return goodsData;
}

module.exports.deleteGoodsByPage = async function ({data}) {
    return await goodsModel.deleteOne({ _id: data });
}