const { serviceModel } = require("./Models/serviceModel.js");

module.exports.addService = async function (data) {
    console.log(data);
    return await serviceModel.create(data);
}
module.exports.findService = async function () {
    return await serviceModel.find();
}