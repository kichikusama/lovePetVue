const addService = async (state) => await fetch(`/service/addService`, {
  headers: {
    "Content-Type": "application/json",
  },
  method: 'POST',
  body: JSON.stringify(state)
}).then(response => response.json());

const getService = async () => await fetch(`/service/getService`).then(response => response.json());
const deteleService = async (id) => await fetch(`/service/deteleService?id=${id}`).then(response => response.json())//删除服务by id

const findService = async () => await fetch(`/service/findService`).then(response => response.json());
export default {
  addService,
  getService,
  findService,
  deteleService
}