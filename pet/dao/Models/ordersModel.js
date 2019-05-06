const mongoose = require('mongoose');

// 顶单管理
const ordersSchema = new mongoose.Schema({
    memberId: {  // 宠主 id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'membersModel'
    },
    shopId: {  // 门店 id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'shopsModel'
    },
    petsId: [{  // 宠物 id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'petsModel'
    }],
    serviceId: [{  // 服务 id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'serviceModel'
    }],
    goodsId: [{  // 商品 id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'goodsModel'
    }],
    orderTotal: String, // 总价
    orderDate: Date, // 时间 
})

mongoose.model('ordersModel', ordersSchema, "orders");

module.exports.ordersModel = mongoose.model('ordersModel');