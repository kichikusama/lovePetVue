const { petsModel } = require("./Models/petsModel.js");

module.exports.addPets = async function (data) {
    const result = await petsModel.create(data);
    return result;
}
module.exports.getPets = async function () {
    return await petsModel.find();
}

module.exports.deletePetByPage = async function ({ _id, shopId }) {
    const [result] = await petsModel.find({ _id });
    const arr = result.shopId;
    const index = arr.indexOf(shopId);
    arr.splice(index, 1);
    return await petsModel.update({ _id }, { shopId: arr })
}
//通过id获取
module.exports.getPetsById = async function ({ _id }) {
    return await petsModel.find({ _id });
}
//通过id修改对应数据
module.exports.updatePetsById = async function ({ _id, data }) {
    return await petsModel.updateOne({ _id }, data);
}

module.exports.getAllPets = async function ({ currentPage, eachPage, type, text, shopId }) {

    let totalPage;
    let pets;
    let total;
    let skip = (currentPage - 1) * eachPage; // 从第几条数据开始取 
    let limit = eachPage - 0; // 取几条数据
    if (text) {
        const result = await petsModel
            .find({
                [type]: { $regex: [text], $options: '$i' },
            })
        const data = [];
        for (let item of result) {
            if (item.shopId.includes(shopId)) {
                data.push(item)
            }
        }
        total = data.length;
        totalPage = Math.ceil(total / eachPage);
        pets = data.splice(skip, limit)
    } else {
        const result = await petsModel.find();
        const data = [];
        for (let item of result) {
            if (item.shopId.includes(shopId)) {
                data.push(item)
            }
        }
        total = data.length;
        totalPage = Math.ceil(total / eachPage);
        pets = data.splice(skip, limit)
    }
    let petsData = {
        currentPage: currentPage - 0, // 当前页面
        eachPage, // 每页显示条数
        totalPage, // 总页数
        total, // 总条数
        pets, // 电影信息
    };
    return petsData;
}


module.exports.getPetsByUserId = async function ({ userId, shopId }) {
    const result = await petsModel.find({ userId });
    const data = [];
    for (let item of result) {
        if (!item.shopId.includes(shopId)) {
            data.push(item)
        }
    }
    return data;
}

module.exports.addShopIdToPets = async function ({ petsIds, shopId }) {
    for (let item of petsIds) {
        const [data] = await petsModel.find({ _id: item });
        const arr = data.shopId;
        arr.push(shopId);
        await petsModel.updateOne({ _id: item }, { shopId: arr });
    }
    return true

}