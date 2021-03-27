import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';
import HomeView from '../views/HomeView.vue';
import SignInView from '../views/SignInView.vue';
import ArticleView from '../views/ArticleView.vue';
import ProfileView from '../views/ProfileView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignInView,
  },
  {
    path: '/article/:id',
    name: 'article',
    component: ArticleView,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'signin' && !store.getters.isAuthorized) {
    next('/signin');
  } else if (to.name === 'signin' && store.getters.isAuthorized) {
    next('/');
  } else {
    next();
  }
});

export default router;
