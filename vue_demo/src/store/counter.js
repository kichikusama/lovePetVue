

export default ({
  // 命名空间 
  namespaced:true,
  state: {
       count:0,
       a:-1,
       b:-2,
  },
  mutations: { // 描述操作数据的方法
     add(state){ // 一个为 "add" 的类型
       state.count++;
     },
     minus(state){
       state.count--;
     }
  }
})
