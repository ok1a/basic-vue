import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// route imports
import HomePage from './views/Home.vue';
import NewsPage from './views/News.vue';
import NewsPage2 from './views/NewsFromAPI.vue';

const routes = [
  {
    path: '/home',
    component: HomePage,
  },
  {
    path: '/news',
    component: NewsPage,
  },
  {
    path: '/news2',
    component: NewsPage2,
  },
];

const router = new VueRouter({ routes });

export default router;
