const addMembers = async (data) => await fetch(`/members/addmembers`,{  // 新增宠主
    headers: { 
        "Content-Type": "application/json",
        // 'Accept':"application/json",
    },
    method:'POST',
    body:  JSON.stringify(data)
}).then(response => response.json())

const getMembersBypage = async (data) => await fetch(`/members/getmembers`,{   //分页获取宠主
  headers: { 
      "Content-Type": "application/json",
      // 'Accept':"application/json",
  },
  method:'POST',
  body:  JSON.stringify(data)
}).then(response => response.json())
export default {
    addMembers,
    getMembersBypage
  }