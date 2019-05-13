const mongoose = require('mongoose');

// 宠物管理
const petsSchema = new mongoose.Schema({
    petsSpecies:String, // 品称
    petsType:String, // 种类
    petsColor: String, // 颜色
    petsBirth:String, // 出生日期
    petsLevel:String, // 规格（成犬、幼犬等）
    petCharacter:String, // 性格
    petsWeight:String, // 体重（5kg、10kg等）
    petsImg:String, // 图片
    userId:String, // 门店管理员 id
    shopId:String // 门店 id
})

mongoose.model('petsModel', petsSchema, "pets");

module.exports.petsModel = mongoose.model('petsModel');