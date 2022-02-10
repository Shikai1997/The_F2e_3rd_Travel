import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/scss/base/tailwindcss.scss';
import '@/assets/scss/base/base.scss';

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
