const addShops = async (data) => await fetch(`/shops/addShop`,{
    headers: { 
        "Content-Type": "application/json",
        // 'Accept':"application/json",
    },
    method:'POST',
    body:  JSON.stringify(data)
}).then(response => response.json())//添加门店

const getShops = async (data) => await fetch(`/shops/getShop`,{
  headers: { 
      "Content-Type": "application/json",
      // 'Accept':"application/json",
  },
  method:'POST',
  body:  JSON.stringify(data)
}).then(response => response.json())//查看所有门店
const deteleShops = async (id) => await fetch(`/shops/deteleShop?id=${id}`).then(response => response.json())//查看所有门店

export default {
  addShops,
  getShops,
  deteleShops
}