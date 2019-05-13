const addService = async (state) => await fetch(`/service/addService`, {
  headers: {
    "Content-Type": "application/json",
  },
  method: 'POST',
  body: JSON.stringify(state)
}).then(response => response.json());
const getServiceByPage = async (data) => await fetch(`/service/getServiceByPage`,{
  headers: {
      "Content-Type": "application/json",
  },
  method:'POST',
  body:  JSON.stringify(data)
}).then(response => response.json())//查看所有服务（具有分页）

const getService = async () => await fetch(`/service/getService`).then(response => response.json());//所有门店

const deleteServiceByPage = async (data) => await fetch(`/service/deleteServiceByPage`, {
  headers: {
      "Content-Type": "application/json",
  },
  method: 'POST',
  body: JSON.stringify(data)
}).then(response => response.json())

const getServiceById = async (data) => await fetch(`/service/getServiceById`, {
  headers: {
      "Content-Type": "application/json",
  },
  method: 'POST',
  body: JSON.stringify(data)
}).then(response => response.json())

const updateServiceById = async (data) => await fetch(`/service/updateServiceById`, {
    headers: {
        "Content-Type": "application/json",
        // 'Accept':"application/json",
    },
    method: 'POST',
    body: JSON.stringify(data)
}).then(response => response.json())


//商店
const getServiceByUserId = async (data) => await fetch(`/service/getServiceByUserId`, {
  headers: {
      "Content-Type": "application/json",
  },
  method: 'POST',
  body: JSON.stringify(data)
}).then(response => response.json())


const addShopIdToService = async (data) => await fetch(`/service/addShopIdToService`, {
  headers: {
      "Content-Type": "application/json",
  },
  method: 'POST',
  body: JSON.stringify(data)
}).then(response => response.json())

export default {
  addService,
  getService,
  deleteServiceByPage,
  getServiceByPage,
  getServiceById,
  updateServiceById,
  addShopIdToService,
  getServiceByUserId
}