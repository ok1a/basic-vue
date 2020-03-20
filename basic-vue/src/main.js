import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import 'normalize.css';

Vue.config.productionTip = false;

const PageOne = {
  template: '<div><h3>This is Page One</h3></div>',
};
const PageTwo = {
  template: '<div><h3>This is Page Two</h3></div>',
};

const routes = [
  {
    path: '/1',
    component: PageOne,
  },
  {
    path: '/2',
    component: PageTwo,
  },
];

const router = new VueRouter({ routes: routes });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
