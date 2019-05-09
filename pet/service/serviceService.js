const {
    addService,
    getService,
    deteleService
} = require('../dao/serviceDao.js');

module.exports.addService = async function (data) {
    return await addService(data);
}

module.exports.getService = async function (data) {
    return await getService(data);
}

//删除服务通过id
module.exports.deteleService = async function (data) {
    // console.log(data);
    
    return await deteleService(data); 
}