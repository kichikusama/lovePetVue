import Vue from 'vue'
import Vuex from 'vuex'

import counter from './store/counter';
import todolist from './store/todolist';
import students from './store/students.js';
import messages from './store/messages.js';


Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
      counter,
      todolist,
      students,
      messages,
  }
})
