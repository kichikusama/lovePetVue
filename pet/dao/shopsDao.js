const { shopsModel } = require("./Models/shopsModel.js");

module.exports.getShopBypage = async function ({ currentPage, eachPage, type, text ,userId}) {
    let total; // 获取总条数
    // 获取当前页数的电影信息
    let shops;
    if (text) {
        shops = await shopsModel
            .find({
                [type]: { $regex: [text], $options: '$i' },
                userId,
                shopType:"0"
            })
            .skip((currentPage - 1) * eachPage).limit(eachPage - 0);
        let counts = await shopsModel
            .find({
                [type]: { $regex: [text], $options: '$i' },
                userId,
                shopType:"0"
            })
            total = counts.length
    } else {
        shops = await shopsModel.find({userId,shopType:"0"}).skip((currentPage - 1) * eachPage).limit(eachPage - 0);
        let counts = await shopsModel.find({userId,shopType:"0"});
        total = counts.length
    }
    let pageData = {
        currentPage: currentPage - 0, // 当前页面
        eachPage, // 每页显示条数
        total, // 总条数
        shops, // 电影信息
    };
    return pageData;
}
module.exports.getShop = async function ({userId}) {
    return await shopsModel.find({userId});
}

module.exports.addShop = async function (data) {
    return await shopsModel.create(data);
}
module.exports.deteleShop = async function ({id}) {
    return await shopsModel.deleteOne({ _id:id }, (err, data) => { })
}

module.exports.revisionShop = async function ({_id,shopName,shopAdd,shopTel}) {
    return await shopsModel.updateOne({ _id}, {shopName,shopAdd,shopTel})
}