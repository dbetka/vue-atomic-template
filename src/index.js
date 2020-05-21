import Vue from 'vue';
import App from './components/app.vue';
import router from './router';
import { store } from './store';
import { ROUTES } from 'utils/macros/routes';
import { styleManager } from 'utils/style-manager';

styleManager.init();

Vue.config.productionTip = false;

Vue.mixin({
  computed: {
    ROUTES: () => ROUTES,
    APP_NAME: () => APP_NAME,
    VERSION: () => VERSION,
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
