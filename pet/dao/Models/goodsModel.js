const mongoose = require('mongoose');

// 商品管理
const goodsSchema = new mongoose.Schema({
    goodsName:String, // 名称
    goodsType:String, // 品类
    goodsMaterial: String, // 材质或制作方法
    goodsCanFor:String, // 适用规格（适用幼犬、成犬等）
    goodsOnlyFor:String, // 专属规格（贵宾专用、柯基专用等）
    goodsSize:String, // 包装规格（1kg、5kg等）
    goodsTaste:String, // 口味（鸡肉味、牛肉味等）
    goodsSpecial:String, // 特殊功能（美毛、去泪痕）
    goodsRegion:String, // 产地（国产、广州、加拿大等）
    goodsDate:String, // 出产日期
    goodsTime:String, // 保质期
    goodsSupplier:String, // 供应商
    goodsIntro:String, // 特色说明
    goodsPrice:String, // 价格
    goodsImg:String, // 图片
})

mongoose.model('goodsModel', goodsSchema, "goods");

module.exports.goodsModel = mongoose.model('goodsModel');