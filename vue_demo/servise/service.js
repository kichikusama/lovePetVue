const addService = async (state) => await fetch(`/service/addService`, {
  headers: {
    "Content-Type": "application/json",
  },
  method: 'POST',
  body: JSON.stringify(state)
}).then(response => response.json());

const getService = async ({
  currentPage = 1,
  eachPage = 10
} = {}) => await fetch(`/service/getService?currentPage=${currentPage}&eachPage=${eachPage}`).then(response => response.json());


const findService = async () => await fetch(`/service/findService`).then(response => response.json());
export default {
  addService,
  getService,
  findService
}