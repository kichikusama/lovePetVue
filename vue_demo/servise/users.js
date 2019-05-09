const getUsers = async (data) => await fetch(`/users/getUsers`,{
    headers: { 
        "Content-Type": "application/json",
        "Accept":"application/json",
    },
    method:'POST',
    body:  JSON.stringify(data)
}).then(response => response.json())

const auditingUsers = async () => await fetch(`/users/auditingUsers`,{  // 获取 待审批 用户
  headers: { 
      "Content-Type": "application/json",
      "Accept":"application/json",
  },
  method:'POST',
  // body:  JSON.stringify(data)
}).then(response => response.json())

const searchUser = async (data) => await fetch(`/users/searchUser`,{
  headers: { 
      "Content-Type": "application/json",
      "Accept":"application/json",
  },
  method:'POST',
  body:  JSON.stringify(data)
}).then(response => response.json())

const addUser = async (data) => await fetch(`/users/addUser`,{  // 新增用户
  headers: { 
      "Content-Type": "application/json",
      "Accept":"application/json",
  },
  method:'POST',
  body:  JSON.stringify(data)
}).then(response => response.json())

const loginUser = async (data) => await fetch(`/users/loginUser`,{ // 用户登录的查询
  headers: { 
      "Content-Type": "application/json",
      "Accept":"application/json",
  },
  method:'POST',
  body:  JSON.stringify(data)
}).then(response => response.json())


export default {
  getUsers,
  searchUser,
  addUser,
  loginUser,
  auditingUsers
}
