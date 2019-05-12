const { petsModel } = require("./Models/petsModel.js");

module.exports.addPets = async function (data) {
    const result = await petsModel.create(data);
    return result;
}
module.exports.getPets = async function () {
    return await petsModel.find();
}

module.exports.deletePetByPage = async function ({data}) {
    return await petsModel.deleteOne({ _id: data });
}
//通过id获取
module.exports.getPetsById = async function ({ _id }) {
    return await petsModel.find({ _id });
}
//通过id修改对应数据
module.exports.updatePetsById = async function ({ _id, data }) {
    return await petsModel.updateOne({ _id }, data);
}

module.exports.getAllPets = async function ({ currentPage, eachPage, type, text }) {
    let total; // 获取总条数
    // 获取当前页数的电影信息
    let pets;
    if (text) {
        pets = await petsModel
            .find({
                [type]: { $regex: [text], $options: '$i' }
            })
            .skip((currentPage - 1) * eachPage).limit(eachPage - 0);
        let counts = await petsModel
            .find({
                [type]: { $regex: [text], $options: '$i' }
            })
            total = counts.length
    } else {
        pets = await petsModel.find().skip((currentPage - 1) * eachPage).limit(eachPage - 0);
        total = await petsModel.countDocuments();
    }
    let pageData = {
        currentPage: currentPage - 0, // 当前页面
        eachPage, // 每页显示条数
        total, // 总条数
        pets, // 电影信息
    };
    return pageData;
}