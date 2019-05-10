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

module.exports.getServiceBypage = async function ({ currentPage, eachPage, type, text }) {
    let total; // 获取总条数
    // 获取当前页数的服务信息
    let data;
    if (text) {
        data = await serviceModel
            .find({
                [type]: { $regex: [text], $options: '$i' }
            })
            .skip((currentPage - 1) * eachPage).limit(eachPage - 0);
        let counts = await serviceModel
            .find({
                [type]: { $regex: [text], $options: '$i' }
            })
            total = counts.length
    } else {
        data = await serviceModel.find().skip((currentPage - 1) * eachPage).limit(eachPage - 0);
        total = await serviceModel.countDocuments();
    }
    let pageData = {
        currentPage: currentPage - 0, // 当前页面
        eachPage, // 每页显示条数
        total, // 总条数
        data, // 服务信息
    };
    return pageData;
}
//通过ID删除服务
module.exports.deteleService = async function ({id}) {
    return await serviceModel.deleteOne({ _id:id }, (err, data) => { })
}

module.exports.getServiceById = async function ({ _id }) {
    let a= await serviceModel.find({ _id });
    return a;
}

module.exports.updateServiceById = async function ({ _id, data }) {
    return await serviceModel.updateOne({ _id }, data);
}