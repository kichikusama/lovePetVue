const addService = async ({} = {}) => await fetch(`/service/addService`).then(response => response.json());
const getService = async ({ currentPage = 1, eachPage = 10  } = {}) => await fetch(`/service/findService?currentPage=${currentPage}&eachPage=${eachPage}`).then(response => response.json());
const findService = async ({} = {}) => await fetch(`/service/findService`).then(response => response.json());
export default {
  addService,
  getService,
  findService
}