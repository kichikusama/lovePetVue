const mongoose = require('mongoose');

// 门店管理
const shopsSchema = new mongoose.Schema({
    shopName:String, // 名称
    shopLicenceNum: String, // 营业执照号码
    shopLicenceImg:String, // 营业执照照片
    shopAdd:String, // 营业地址
    shopLocation:String, // 定位
    shopCorporate:String, // 法人
    shopTel:String, // 联系电话
    shopImg:String, // 头图
    shopFeature:String, // 特色
    shopCommission:String, // 佣金比例，
    shopEmployee:[{
        empName:String, // 店员姓名
        empLevel:String, // 店员等级
        empPhone:String, // 店员电话
    }],
    userId: String,
    shopType:{
        type:String,
        default:"0",
    }//0为审核中；1为可用
    
})

mongoose.model('shopsModel', shopsSchema, "shops");

module.exports.shopsModel = mongoose.model('shopsModel');