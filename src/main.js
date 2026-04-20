import App from './App.vue'
import router from './router/router.js'
import { createApp } from 'vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import './style.css'

createApp(App)
  .use(router)
  .use(VueGoogleMaps, {
    load: {
      key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    }
  })
  .mount('#app')