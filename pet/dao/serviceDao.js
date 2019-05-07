const { serviceModel } = require("./Models/serviceModel.js");

module.exports.addService = async function (data) {
    console.log(data);
    return await usersModel.create(data);
}
module.exports.getService = async function () {
    return await serviceModel.find();
}