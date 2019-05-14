const {
    serviceModel
} = require("./Models/serviceModel.js");
//新增
module.exports.addService = async function (data) {
    return await serviceModel.create(data);
}
//获取列表
module.exports.getService = async function () {
    let a = await serviceModel.find();
    // console.log(a);
    return a;

}


module.exports.getServiceByPage = async function ({

    currentPage,
    eachPage,
    type,
    text,
    shopId
}) {
    let totalPage;
    let gg;
    let count;
    let skip = (currentPage - 1) * eachPage; // 从第几条数据开始取 
    let limit = eachPage - 0; // 取几条数据
    // 获取当前页数的服务信息
    if (text) {
        const result = await serviceModel
            .find({
                [type]: {
                    $regex: [text],
                    $options: '$i'
                }
            })
        const data = [];
        for (let item of result) {
            if (item.shopId.includes(shopId)) {
                data.push(item)
            }
        }
        count = data.length;
        totalPage = Math.ceil(count / eachPage);
        gg = data.splice(skip, limit)
    } else {
        const result = await serviceModel.find();
        const data = [];
        for (let item of result) {
            if (item.shopId.includes(shopId)) {
                data.push(item)
            }
        }
        count = data.length;
        totalPage = Math.ceil(count / eachPage);
        gg = data.splice(skip, limit)
    }
    let pageData = {
        currentPage: currentPage - 0, // 当前页面
        eachPage, // 每页显示条数
        totalPage, // 总条数
        count, // 
        gg, // 服务信息
    };
    return pageData;
}

module.exports.deleteServiceByPage = async function ({ _id, shopId }) {
    console.log({_id,shopId});
    
    const [result] = await serviceModel.find({_id});
    const arr = result.shopId;
    const index = arr.indexOf(shopId);
    arr.splice(index, 1);
    return await serviceModel.update({ _id }, { shopId: arr })
}


module.exports.getServiceById = async function ({
    _id
}) {
    let a = await serviceModel.find({
        _id
    });
    return a;
}

module.exports.updateServiceById = async function ({
    _id,
    data
}) {
    return await serviceModel.updateOne({
        _id
    }, data);
}

module.exports.getServiceByUserId = async function ({
    userId,
    shopId
}) {

    const result = await serviceModel.find({
        userId
    });
    const data = [];
    for (let item of result) {
        if (!item.shopId.includes(shopId)) {
            data.push(item)
        }
    }
    return data;
}

module.exports.addShopIdToService = async function ({
    serviceIds,
    shopId
}) {
    for (let item of serviceIds) {
        const [data] = await serviceModel.find({
            _id: item
        });
        const arr = data.shopId;
        arr.push(shopId);
        await serviceModel.updateOne({
            _id: item
        }, {
            shopId: arr
        });
    }
    return true
    // return await ServiceModel.findByIdAndUpdate({ _id: { $in: ServiceIds } }, { shopId })
}