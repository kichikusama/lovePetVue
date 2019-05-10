const { goodsModel } = require("./Models/goodsModel.js");

module.exports.addGoods = async function (data) {
    return await goodsModel.create(data);
}
module.exports.getGoodsByPage = async function ({ currentPage, eachPage, type, text, shopId }) {
    let totalPage;
    let goods;
    let count;
    if (text) {
        goods = await goodsModel
            .find({
                [type]: { $regex: [text], $options: '$i' },
                shopId
            })
            .skip((currentPage - 1) * eachPage).limit(eachPage - 0);
        counts = await goodsModel
            .find({
                [type]: { $regex: [text], $options: '$i' },
                shopId
            })
        count = counts.length;
        console.log(goods);
        totalPage = Math.ceil(count / eachPage);
    } else {
        goods = await goodsModel.find({ shopId }).skip((currentPage - 1) * eachPage).limit(eachPage - 0);
        counts = await goodsModel.find({ shopId });
        count = counts.length;
        totalPage = Math.ceil(count / eachPage);
    }
    let goodsData = {
        currentPage: currentPage - 0, // 当前页面
        eachPage, // 每页显示条数
        totalPage, // 总条数
        count, // 
        goods, // 电影信息
    };
    return goodsData;
}

module.exports.deleteGoodsByPage = async function ({ data }) {
    return await goodsModel.deleteOne({ _id: data });
}

module.exports.getGoodsById = async function ({ _id }) {
    return await goodsModel.find({ _id });
}

module.exports.updateGoodsById = async function ({ _id, data }) {
    return await goodsModel.updateOne({ _id }, data);
}

module.exports.getGoodsByShopId = async function (shopId) {
    return await goodsModel.find(shopId)
}