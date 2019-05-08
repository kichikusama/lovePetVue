const addShops = async (data) => await fetch(`/shops/addShop`,{
    headers: { 
        "Content-Type": "application/json",
        // 'Accept':"application/json",
    },
    method:'POST',
    body:  JSON.stringify(data)
}).then(response => response.json())

export default {
  addShops
}