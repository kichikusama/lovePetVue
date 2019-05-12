const mongoose = require('mongoose');

// 宠主管理
const membersSchema = new mongoose.Schema({
    memberPhone: String, // 手机号
    memberAcount: String, // 昵称
    memberName: String, // 真实姓名
    memberCard: String, // 会员卡
    memberImg: String, // 头图
    memberAdd: String, // 送货地址
    memberArea: String, // 区域
    memberPoint: Number, // 积分
    memberPets: [{
        petName: String, // 宠物名字
        petSpecies: String, // 品类（猫、狗……）
        petType: String, // 种类（泰迪、柯基……）
        petColor: String, // 颜色
        petBirth: String, // 出生日期（xx年xx月）,
        petCharacter: String, // 性格
    }]
})

mongoose.model('membersModel', membersSchema, "members");

module.exports.membersModel = mongoose.model('membersModel');