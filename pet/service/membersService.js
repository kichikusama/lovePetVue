const { addMembers,getMembers,deleteMembers } = require('../dao/membersDao.js');

module.exports.addMembers = async function (data) {
    return await addMembers(data); 
}

module.exports.getMembers = async function (data) {
  return await getMembers(data); 
}

module.exports.deleteMembers = async function (id) {
    return await deleteMembers(id); 
  }
