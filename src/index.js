import Vue from 'vue';
import App from './components/app.vue';
import router from './router';
import { store } from './store';
import { ROUTES } from 'utils/macros/routes';
import { styleManager, THEMES } from 'utils/style-manager';

// import VueAtomic from '../../vue-atomic';
// import '../../vue-atomic/dist/themes/light.css';
// import '../../vue-atomic/dist/index.css';

import VueAtomic from '@dbetka/vue-atomic';
import '@dbetka/vue-atomic/dist/themes/light.css';
import '@dbetka/vue-atomic/dist/index.css';

Vue.use(VueAtomic);

styleManager.init();

Vue.config.productionTip = false;

Vue.mixin({
  computed: {
    ROUTES: () => ROUTES,
    THEMES: () => THEMES,
    APP_NAME: () => APP_NAME,
    VERSION: () => VERSION,
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
