import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { routes } from './routes';
import { store } from './store/store';

import App from './App.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('token') && to.name !== 'signIn') {
    next({ name: 'signIn' });
  }
  next();
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
