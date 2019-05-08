const { shopsModel } = require("./Models/shopsModel.js");

module.exports.addUser = async function (data) {
    console.log(data);
    const result = await usersModel.create(data);
    console.log(result);
    return result;
}
module.exports.addShop = async function (data) {
    return await shopsModel.create(data);
}