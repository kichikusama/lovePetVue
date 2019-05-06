const {  } = require('../dao/shopsDao.js');

module.exports.addUser = async function (data) {
    const result = await addUser(data);
    if (result) {
        return true;
    } else {
        return false;
    }
}

module.exports.getUsers = async function () {
  return await getUsers(); 
}