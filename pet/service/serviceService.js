const { addService,getService } = require('../dao/serviceDao.js');

module.exports.addService = async function (data) {
    return await addService(data); 
}

module.exports.getService = async function () {
    const result = await getService(data);
    if (result) {
        return true;
    } else {
        return false;
    }
}