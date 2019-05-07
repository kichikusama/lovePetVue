const { addService,getService } = require('../dao/serviceDao.js');

module.exports.addService = async function (data) {
    return await addService(data);
}

module.exports.getService = async function () {
  return await getService(); 
}