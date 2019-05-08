const { serviceModel } = require("./Models/serviceModel.js");

module.exports.addService = async function (data) {
    let a = await serviceModel.create(data);
    console.log(a);
    return a;
}
module.exports.findService = async function () {
    return await serviceModel.find();
}
module.exports.getService = async function ({ currentPage, eachPage }) {   
    let count = await serviceModel.countDocuments(); // 获取总条数
    let totalPage = Math.ceil(count / eachPage); // 总页数
    // 获取当前页数的用户信息
    let rows = await serviceModel
        .find()
        .skip((currentPage - 1) * eachPage)
        .limit(eachPage - 0)

    let pageData = {
        currentPage: currentPage - 0, // 当前页面
        eachPage, // 每页显示条数
        totalPage, // 总页数
        count, // 总条数
        rows, // 学生信息
    };
    return pageData;
}