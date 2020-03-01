// 객체 모듈 방식
import { Module } from 'vuex';
import { RootState } from './store';

// tslint:disable-next-line:class-name
interface moduleA {
  data: string;
}

const module: Module<moduleA, RootState> = {
  namespaced: true,
  state: {
    data: 'moduleA',
  },
  mutations: {
    setData(state, data: string) {
      state.data = data;
    }
  },
  actions: {
    setRootData({ commit }, data: string) {
      commit('setData', data);
    }
  },
  getters: {
    data: (state) => state.data,
  }
}

export default module;


// 클래스형 모듈 방식
// import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

// @Module({
//   namespaced: true,
//   name: 'moduleA',
// })
// export default class ModuleA extends VuexModule {
//   public data: string = 'moduleA';

//   @Mutation
//   public setData(data: string) {
//     this.data = data;
//   }

//   @Action
//   public editData(data: string) {
//     this.context.commit('setData', data);
//   }

//   get moduleAdata() {
//     return this.data;
//   }
// }
