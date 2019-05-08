const {
    addService,
    getService
} = require('../dao/serviceDao.js');

module.exports.addService = async function (data) {
    return await addService(data);
}

module.exports.getService = async function (data) {
    return await getService(data);
}

//删除服务通过id
module.exports.deleteServiceById = async function (data) {
    let remove = await deleteServiceById(data);
    if (remove.ok) {
        return true
    } else {
        return false
    }
}