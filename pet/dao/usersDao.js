const { usersModel } = require("./Models/usersModel.js");


// 新增 用户  post 请求方式 GM
module.exports.addUser = async function (users) {
    return await usersModel.create(users);
}
// 分页获取用户 get 请求方式 GM
module.exports.getUsers = async function ({ currentPage, eachPage }) {
    let count = await usersModel.countDocuments(); // 获取总条数
    let totalPage = Math.ceil(count / eachPage); // 总页数
    // 获取当前页数的用户信息
    let users = await usersModel
        .find()
        .skip((currentPage - 1) * eachPage)
        .limit(eachPage - 0)

    let pageData = {
        currentPage: currentPage - 0, // 当前页面
        eachPage, // 每页显示条数
        totalPage, // 总页数
        count, // 总条数
        users, // 学生信息
    };
    return pageData;
}


// 通过 名字 查询用户
// 通过 电话 查询用户
// 通过 门店 查询用户
//搜索框 搜索用户 get 请求方式 GM
module.exports.searchUser = async function ({ type, text }) {
    return await usersModel.find({
        [type]: { $regex: [text], $options: '$i' }
    })
}

// 删除用户

