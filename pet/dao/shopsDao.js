const {  } = require("./Models/shopsModel.js");

module.exports.addUser = async function (data) {
    console.log(data);
    const result = await usersModel.create(data);
    console.log(result);
    return result;
}
module.exports.getUsers = async function () {
    return await usersModel.find();
}