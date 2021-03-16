import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'materialize-css/dist/css/materialize.min.css'
const emitter = mitt();

createApp(App).use(router).mount('#app')
