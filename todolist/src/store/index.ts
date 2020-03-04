import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { State, Item } from './store.interface';

Vue.use(Vuex);

const store: StoreOptions<State> = {
  state: {
    todoList: [
      { id: 0, title: 'sdfasf', status: 'active' },
      { id: 1, title: 'asdf-asdf', status: 'clear' },
      { id: 2, title: 'sadf-dsaf', status: 'active' },
      { id: 3, title: 'sdfasdf-asdfasf', status: 'clear' },
    ],
  },
  mutations: {
    // todo add
    addItem(state, item: Item) {
      state.todoList.push(item);
    },
    // todo change
    changeStatus(state, {id, status}: {id: number, status: 'active' | 'clear'}) {
      state.todoList[id].status = status;
    },
    // todo remove
    removeItem(state, id: number) {
      state.todoList.splice(id, 1);
    },
  },
  actions: {
  },
  getters: {
    allTodoList: (state) => state.todoList,
    activeTodoList: (state) => {
      return state.todoList.filter((item: Item) => item.status === 'active');
    },
    clearTodoList: (state) => {
      return state.todoList.filter((item: Item) => item.status === 'clear');
    },
  },
};

export default new Vuex.Store(store);
