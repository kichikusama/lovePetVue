const getUsers = async (data) => await fetch(`/users/getUsers`,{  // 分页查询用户
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

  const disabledUsers = async () => await fetch(`/users/disabledUsers`,{  // 获取 违规 用户
  headers: { 
      "Content-Type": "application/json",
      "Accept":"application/json",
  },
  method:'POST',
  // body:  JSON.stringify(data)
}).then(response => response.json())

const adoptUsers = async (data) => await fetch(`/users/adoptUsersById`,{  // 审批，解禁 用户  即修改用户的 userStatus
  headers: { 
      "Content-Type": "application/json",
      "Accept":"application/json",
  },
  method:'POST',
  body:  JSON.stringify(data)
}).then(response => response.json())


const againstUsers = async (data) => await fetch(`/users/againstUsersById`,{  // 用户违规状态 即修改用户的 userStatus
  headers: { 
      "Content-Type": "application/json",
      "Accept":"application/json",
  },
  method:'POST',
  body:  JSON.stringify(data)
}).then(response => response.json())


const searchUser = async (data) => await fetch(`/users/searchUser`,{  // 条件查询用户
  headers: { 
      "Content-Type": "application/json",
      "Accept":"application/json",
  },
  method:'POST',
  body:  JSON.stringify(data)
}).then(response => response.json())

const getShops = async (data) => await fetch(`/shops/getShopById`,{  // 获取门店信息
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
  auditingUsers,
  getShops,
  adoptUsers,
  disabledUsers,
  againstUsers
}
