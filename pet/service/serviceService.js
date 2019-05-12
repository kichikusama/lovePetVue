const {
    addService,
    getService,
    deteleService,
    getServiceBypage,
    getServiceById,
    updateServiceById,
    getServiceByUserId,
    addShopIdToService
} = require('../dao/serviceDao.js');

module.exports.addService = async function (data) {
    return await addService(data);
}

module.exports.getServiceBypage = async function (data) {
    return await getServiceBypage(data); 
}

module.exports.getService = async function (data) {
    return await getService(data);
}

//删除服务通过id
module.exports.deteleService = async function (data) {
    return await deteleService(data); 
}

module.exports.getServiceById = async function (service) {
    return await getServiceById(service);
}

module.exports.updateServiceById = async function (data) {
    const result = await updateServiceById(data);
    if (result.ok) {
        return true
    } else {
        return false;
    }
}
module.exports.getServiceByUserId = async function (userId) {
    return await getServiceByUserId(userId);
}

module.exports.addShopIdToService = async function (data) {
    return await addShopIdToService(data);

}