const { serviceModel } = require("./Models/serviceModel.js");
//新增
module.exports.addService = async function (data) {
    return await serviceModel.create(data);
}
//获取列表
module.exports.getService = async function () {
    let a= await serviceModel.find();
    // console.log(a);
    return a;
    
}

module.exports.findService = async function ({ currentPage, eachPage }) {   
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
//通过ID删除服务
module.exports.deteleService = async function ({id}) {
    // console.log(id)
    return await serviceModel.deleteOne({ _id:id }, (err, data) => { })
}
