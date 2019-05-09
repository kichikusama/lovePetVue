const { petsModel } = require("./Models/petsModel.js");

module.exports.addPets = async function (data) {
    const result = await petsModel.create(data);
    return result;
}
module.exports.getPets = async function () {
    return await petsModel.find();
}