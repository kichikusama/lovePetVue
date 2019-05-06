class Reactive {
    constructor( { el, data } = {} ){
        const _data = data();// 返回值是一个对象
        this._el = document.querySelector(el); // 查找到元素节点
        
    } 

    createObserver(){ // 创建监听器
        const that = this;
        return {
            watchers:{},
            addWatcher(){},
            subscribe(){},
            emit(){},
        }
    }
    restoreProxy(data){ // 创建代理

    }
}

var app = new Reactive({
     el:'#app',
     data(){
         return {
             count:0,
             message:'hello',
         }
     }
})