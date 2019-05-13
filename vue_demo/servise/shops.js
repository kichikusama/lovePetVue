const addShops = async (data) => await fetch(`/shops/addShop`,{
    headers: { 
        "Content-Type": "application/json",
        // 'Accept':"application/json",
    },
    method:'POST',
    body:  JSON.stringify(data)
}).then(response => response.json())//添加门店

const getShopsBypage = async (data) => await fetch(`/shops/getShopBypage`,{
  headers: { 
      "Content-Type": "application/json",
      // 'Accept':"application/json",
  },
  method:'POST',
  body:  JSON.stringify(data)
}).then(response => response.json())//查看所有门店（具有分页）


const getShops = async (data) => await fetch(`/shops/getShop`,{
  headers: { 
      "Content-Type": "application/json",
      // 'Accept':"application/json",
  },
  method:'POST',
  body:  JSON.stringify(data)
}).then(response => response.json())//查看当前管理员所有门店


const deteleShops = async (id) => await fetch(`/shops/deteleShop?id=${id}`).then(response => response.json())//删除指定门店

const revisionShop = async (data) => await fetch(`/shops/revisionShop`,{
  headers: { 
      "Content-Type": "application/json",
      // 'Accept':"application/json",
  },
  method:'POST',
  body:  JSON.stringify(data)
}).then(response => response.json())//修改指定门店

const auditingShop= async (data) => await fetch(`/shops/auditingShopById`,{
  headers: { 
      "Content-Type": "application/json",
      // 'Accept':"application/json",
  },
  method:'POST',
  body:  JSON.stringify(data)
}).then(response => response.json())//审批门店  gm

export default {
  addShops,
  getShopsBypage,
  deteleShops,
  getShops,
  revisionShop,
<<<<<<< HEAD
  
=======
  auditingShop
>>>>>>> 8a0dd6ec49cfd42a61c144586a99aed25bb8fa95
}