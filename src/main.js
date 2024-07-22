import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const app = createApp( App );

app.use( VueSplide )
app.use(router)
app.mount('#app')


