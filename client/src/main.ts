import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { MultiplierService } from './services/multiplier.service';
import { ProductsService } from './services/products.service';
import { TestService } from './services/test.service';

Vue.config.productionTip = false;

// Register services here.
export const multiplierService = MultiplierService.getInstance({});
export const testService = TestService.getInstance({ multiplierService });
export const productsService = ProductsService.getInstance({});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
