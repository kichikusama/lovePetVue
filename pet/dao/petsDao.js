const { petsModel } = require("./Models/petsModel.js");

module.exports.addPet = async function (data) {
    console.log(data);
    const result = await petsModel.create(data);
    console.log(result);
    return result;
}
module.exports.getUsers = async function () {
    return await usersModel.find();
}