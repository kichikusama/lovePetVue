const {
    addService,
    getService,
    deleteServiceByPage,
    getServiceByPage,
    getServiceById,
    updateServiceById,
    getServiceByUserId,
    addShopIdToService
} = require('../dao/serviceDao.js');

module.exports.addService = async function (data) {
    return await addService(data);
}


module.exports.getServiceByPage = async function (data) {
    return await getServiceByPage(data); 
}

module.exports.getService = async function (data) {
    return await getService(data);
}

//删除服务通过id
module.exports.deleteServiceByPage = async function (data) {
    const result = await deleteServiceByPage(data);
    if (result.ok) {
        return true
    } else {
        return false;
    }
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