import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Importa el router que creaste

const app = createApp(App);
app.use(router);  // Usa el router en la aplicación
app.mount('#app');

