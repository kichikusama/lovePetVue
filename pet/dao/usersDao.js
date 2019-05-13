const { usersModel } = require("./Models/usersModel.js");


// 新增 用户  post 请求方式 GM
module.exports.addUser = async function (users) {
    console.log(users);
    // console.log(users); 
    return await usersModel.create(users);
}
// 分页获取用户 get 请求方式 GM


module.exports.getUsers = async function ({ currentPage, eachPage,userStatus,againstTimes }) {  
     console.log("userStatus"+userStatus);
    let count = await usersModel.countDocuments(); // 获取总条数
    let totalPage = Math.ceil(count / eachPage); // 总页数
    let rows = [];
    if(userStatus){  //  用户列表查询 传递 userStatus
        rows = await usersModel
        .find({userType:"0",againstTimes})   // 只查找 黑名单
        .skip((currentPage - 1) * eachPage)
        .limit(eachPage - 0)

    }else{
        rows = await usersModel
        .find({userType:"0",userStatus:"1"})   // 只查找 门店管理员,且状态值为可用
        .skip((currentPage - 1) * eachPage)
        .limit(eachPage - 0)
    }
    

    let pageData = {
        currentPage: currentPage - 0, // 当前页面
        eachPage, // 每页显示条数
        totalPage, // 总页数
        count, // 总条数
        rows, // 用户信息
    };
    // console.log(pageData);
    
    return pageData;

}
module.exports.auditing = async function () {     
    let rows = await usersModel.find({userStatus:"0",userType:"0"})   // 待审批用户
    console.log(rows);  
    return rows;
}
module.exports.disabledUsers = async function () {     
    let rows = await usersModel.find({userStatus:"2",userType:"0"})   // 违规用户
    // console.log(rows);  
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
//通过Id修改用户
module.exports.againstUsersById = async function (UsersDetails) {
    return await usersModel.update({ _id: UsersDetails._id }, { userStatus: UsersDetails.userStatus, againstReason: UsersDetails.againstReason, againstTimes: UsersDetails.againstTimes })
}
//删除电影时通过id
module.exports.deleteUserById = async function (_id ) {
    console.log(_id);
    let data = await usersModel.deleteOne({ _id }, (err, data) => { });
    console.log(data);   
    return data;
}
 //通过Id修改  待审批用户状态
module.exports.adoptUsersById = async function (idAndStatus) {
    return await usersModel.update({ _id: idAndStatus._id }, { userStatus: idAndStatus.userStatus})
}
 //通过Id修改 违规用户状态
 module.exports.againstUsersById= async function (idStatusReasonAgainstTimes) {
    return await usersModel.update({ _id: idStatusReasonAgainstTimes._id }, { userStatus: idStatusReasonAgainstTimes.userStatus,againstReason:idStatusReasonAgainstTimes.againstReason,againstTimes:idStatusReasonAgainstTimes.againstTimes})
}
