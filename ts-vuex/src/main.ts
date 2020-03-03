import Vue from 'vue';
import App from './App.vue';
// vuex-class
import store from './store';
// store - vuex-module-decorators
// import store from './store/store';


Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
