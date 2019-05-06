const mongoose = require('mongoose');

// 服务管理
const serviceSchema = new mongoose.Schema({
    serviceName:String, // 名称
    serviceType:String, // 服务类别
    serviceSchedule: String, // 排期(按时间段)
    serviceCanFor:String, // 适用规格（按体重规格等）
    serviceDetial:String, // 服务规格（普修，精修等）
    serviceTime:String, // 耗时（正常耗时）
    serviceLevel:Number, // 服务员等级（普通，高级价格等）
    servicePrice:Number, // 价格
})

mongoose.model('serviceModel', serviceSchema, "service");

module.exports.serviceModel = mongoose.model('serviceModel');