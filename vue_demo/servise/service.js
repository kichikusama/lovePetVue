const addService = async ({} = {}) => await fetch(`/service/addService?`).then(response => response.json());
const findService = async ({} = {}) => await fetch(`/service/findService?`).then(response => response.json());
export default {
  addService,
  findService,

}