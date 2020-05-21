import Vue from 'vue';
import Router from 'vue-router';
import { routes } from './routes';

const originalPush = Router.prototype.push;
Router.prototype.push = function push (location) {
  const promise = originalPush.call(this, location);
  promise.catch(err => err);

  return promise;
};

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
