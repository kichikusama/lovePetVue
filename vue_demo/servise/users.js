const getUsers = async (data) => await fetch(`/users/getUsers`,{
    headers: { 
        "Content-Type": "application/json",
        "Accept":"application/json",
    },
    method:'POST',
    body:  JSON.stringify(data)
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

export default {
  getUsers,
  searchUser,
  addUser
}
