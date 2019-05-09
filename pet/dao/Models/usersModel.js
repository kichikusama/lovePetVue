const mongoose = require('mongoose');

// 门店管理员和平台管理员
const usersSchema = new mongoose.Schema({
    userAcount: String, // 登录名
    userPwd: String, // 密码
    userPhone: String, // 手机号
    userMail: String, // 邮箱
    userName: String, // 姓名
    userType: {   // 角色
        type: String,
        default: "0" // 门店管理员 ：0； 平台管理员：1；
    },
    userStatus:{   // 
        type: String,
        default: "0" // 
    }, // 申请中：0; 可用：1； 不可用：2；

    shopId: [{  // 门店 id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'shopsModel'
    }],
    // goodsId: [{  // 商品 id
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'goodsModel'
    // }],
    // serviceId: [{  // 服务 id
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'serviceModel'
    // }],
    // petId: [{  // 宠物 id
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'petsModel'
    // }],
})

mongoose.model('usersModel', usersSchema, "users");

module.exports.usersModel = mongoose.model('usersModel');

// db.users.insert({ userAcount:"BBB", userPwd:"123456",userPhone:"13468151543",userMail:"5671456987@qq.com",userName:"bbb", userType:'0',userStatus:"1"})