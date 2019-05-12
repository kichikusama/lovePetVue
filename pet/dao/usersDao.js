const { usersModel } = require("./Models/usersModel.js");


// 新增 用户  post 请求方式 GM
module.exports.addUser = async function (users) {
    console.log(users);
    
    return await usersModel.create(users);
   
}
// 分页获取用户 get 请求方式 GM
module.exports.getUsers = async function ({ currentPage, eachPage }) {   
    let count = await usersModel.countDocuments(); // 获取总条数
    let totalPage = Math.ceil(count / eachPage); // 总页数
    // 获取当前页数的用户信息
    let rows = await usersModel
        .find({userType:"0",userStatus:"1"})   // 只查找 门店管理员,且状态值为可用
        .skip((currentPage - 1) * eachPage)
        .limit(eachPage - 0)

    let pageData = {
        currentPage: currentPage - 0, // 当前页面
        eachPage, // 每页显示条数
        totalPage, // 总页数
        count, // 总条数
        rows, // 学生信息
    };
    // console.log(pageData);
    
    return pageData;

}
module.exports.auditing = async function () {     
    let rows = await usersModel.find({userStatus:"0",userType:"0"})   // 待审批用户
    console.log(rows);  
    return rows;
}
// 通过 名字 查询用户
// 通过 电话 查询用户
// 通过 门店 查询用户
//搜索框 搜索用户 get 请求方式 GM
module.exports.searchUser = async function ({ searchType, select }) {
    // console.log(searchType+select);
    
    return await usersModel.find({
        [searchType]: { $regex: [select], $options: '$i' }
    })
}
module.exports.loginUser = async function (user) {
    // console.log(user);
    let xx = await usersModel.find(user);
    // console.log("xx:"+xx);  
    return xx
}
//删除电影时通过id
module.exports.deleteUserById = async function (_id ) {
    console.log(_id);
    let data = await usersModel.deleteOne({ _id }, (err, data) => { });
    console.log(data);   
    return data;
}

