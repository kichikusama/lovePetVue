const addService =  async (state) => await await fetch(`/service/addService?state=${state}`).then(response => response.json());
const getServiceByPageAsync = async ({ currentPage = 1, eachPage = 10  } = {}) => await fetch(`/service/getService?currentPage=${currentPage}&eachPage=${eachPage}`).then(response => response.json());
const findService =  async () => await fetch(`/service/findService`).then(response => response.json());
export default {
  addService,
  getServiceByPageAsync,
  findService
}