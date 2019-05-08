const addService = async (state) => await fetch(`/service/addService`, {
  headers: {
    "Content-Type": "application/json",
  },
  method: 'POST',
  body: JSON.stringify(state)
}).then(response => response.json());

const getService = async () => await fetch(`/service/getService`).then(response => response.json());


const findService = async () => await fetch(`/service/findService`).then(response => response.json());
export default {
  addService,
  getService,
  findService
}