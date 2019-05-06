
export default ({
// 命名空间 
namespaced:true,
  state: {
       index:3,
       filter:'ALL',
       todos:[
        { id:0,text:'js',completed:false },
        { id:1,text:'ts',completed:true },
        { id:2,text:'sass',completed:false },
    ]
  },
  getters:{
    total(state){
      return state.todos.length;
    }
  },
  mutations: { // 描述操作数据的方法
     addTodo(state,text){
       state.todos.push({ id:state.index++,text,completed:false });
      
     },
     completedTodo(state,item){
        item.completed = !item.completed;
     },
     toggleTodo(state,item){
         console.log('in');
         
         state.filter = item;
     }
  },
  actions: {

  }
})
