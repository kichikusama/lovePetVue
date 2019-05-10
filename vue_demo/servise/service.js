const addService = async (state) => await fetch(`/service/addService`, {
  headers: {
    "Content-Type": "application/json",
  },
  method: 'POST',
  body: JSON.stringify(state)
}).then(response => response.json());

const getServiceBypage = async (data) => await fetch(`/service/getServiceBypage`,{
  headers: {
      "Content-Type": "application/json",
      // 'Accept':"application/json",
  },
  method:'POST',
  body:  JSON.stringify(data)
}).then(response => response.json())//查看所有门店（具有分页）

const getService = async () => await fetch(`/service/getService`).then(response => response.json());//所有门店

const deteleService = async (id) => await fetch(`/service/deteleService?id=${id}`).then(response => response.json())//删除服务by id

const getServiceById = async (_id) => await fetch(`/service/getServiceById?_id=${_id}`).then(response => response.json());

const updateServiceById = async (data) => await fetch(`/service/updateServiceById`, {
    headers: {
        "Content-Type": "application/json",
        // 'Accept':"application/json",
    },
    method: 'POST',
    body: JSON.stringify(data)
}).then(response => response.json())


export default {
  addService,
  getService,
  deteleService,
  getServiceBypage,
  getServiceById,
  updateServiceById
}