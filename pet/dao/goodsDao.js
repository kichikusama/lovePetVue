const { goodsModel } = require("./Models/goodsModel.js");

module.exports.addGoods = async function (data) {
    return await goodsModel.create(data);
}
module.exports.getUsers = async function () {
    return await usersModel.find();
}