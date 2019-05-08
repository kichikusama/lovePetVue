const addGoods = async (data) => await fetch(`/goods/addGoods`,{
    headers: { 
        "Content-Type": "application/json"
    },
    method:'POST',
    body:  JSON.stringify(data)
}).then(response => response.json())

export default {
    addGoods
}