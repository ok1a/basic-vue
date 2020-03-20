import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = {
  template: '<div><h3>Home</h3></div>',
};
const News = {
  template: '<div><h3>News</h3></div>',
};

const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/news',
    component: News,
  },
];

const router = new VueRouter({ routes });

export default router;
