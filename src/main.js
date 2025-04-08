import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import "leaflet/dist/leaflet.css";

const app = createApp(App);
app.use(router); // Activation du routeur
app.mount('#app'); // Montage sur la div #app