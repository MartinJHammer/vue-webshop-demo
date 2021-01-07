import Vue from 'vue';
import App from './modules/app/views/app.vue';
import './registerServiceWorker';
import router from './router';
import vuetify from './plugins/vuetify';
import './styles/global.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
