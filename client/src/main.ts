import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { MultiplierService } from './services/multiplier.service';
import { TestService } from './services/test.service';

Vue.config.productionTip = false;
export const multiplierService = MultiplierService.getInstance();
export const testService = TestService.getInstance({
  multiplierService
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
