import { createApp } from 'vue';
import App from './views/app/app.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).mount('#app');
