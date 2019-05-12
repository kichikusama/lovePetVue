const { goodsModel } = require("./Models/goodsModel.js");

module.exports.addGoods = async function (data) {
    return await goodsModel.create(data);
}
module.exports.getGoodsByPage = async function ({ currentPage, eachPage, type, text, shopId }) {
    let totalPage;
    let goods;
    let count;
    let skip = (currentPage - 1) * eachPage; // 从第几条数据开始取 
    let limit = eachPage - 0; // 取几条数据
    if (text) {
        const result = await goodsModel
            .find({
                [type]: { $regex: [text], $options: '$i' },
            })
        const data = [];
        for (let item of result) {
            if (item.shopId.includes(shopId)) {
                data.push(item)
            }
        }
        count = data.length;
        totalPage = Math.ceil(count / eachPage);
        goods = data.splice(skip, limit)
    } else {
        const result = await goodsModel.find();
        const data = [];
        for (let item of result) {
            if (item.shopId.includes(shopId)) {
                data.push(item)
            }
        }
        count = data.length;
        totalPage = Math.ceil(count / eachPage);
        goods = data.splice(skip, limit)
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

module.exports.deleteGoodsByPage = async function ({ _id, shopId }) {
    const [result] = await goodsModel.find({ _id });
    const arr = result.shopId;
    const index = arr.indexOf(shopId);
    arr.splice(index, 1);
    return await goodsModel.update({ _id }, { shopId: arr })
}

module.exports.getGoodsById = async function ({ _id }) {
    return await goodsModel.find({ _id });
}

module.exports.updateGoodsById = async function ({ _id, data }) {
    return await goodsModel.updateOne({ _id }, data);
}

module.exports.getGoodsByUserId = async function ({ userId, shopId }) {
    const result = await goodsModel.find({ userId });
    const data = [];
    for (let item of result) {
        if (!item.shopId.includes(shopId)) {
            data.push(item)
        }
    }
    return data;
}

module.exports.addShopIdToGoods = async function ({ goodsIds, shopId }) {
    for (let item of goodsIds) {
        const [data] = await goodsModel.find({ _id: item });
        const arr = data.shopId;
        arr.push(shopId);
        await goodsModel.updateOne({ _id: item }, { shopId: arr });
    }
    return true
    // return await goodsModel.findByIdAndUpdate({ _id: { $in: goodsIds } }, { shopId })
}