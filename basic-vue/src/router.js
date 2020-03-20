import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// route imports
import NewsPage from './views/News.vue';

const Home = {
  template: '<div><h3>Home <Button/></h3></div>',
};
// const News = {
//   template: '<div><h3>News</h3></div>',
// };

const routes = [
  {
    path: '/home',
    component: Home,
  },
  //   {
  //     path: '/news',
  //     component: News,
  //   },
  {
    path: '/news',
    component: NewsPage,
  },
];

const router = new VueRouter({ routes });

export default router;
