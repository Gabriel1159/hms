import { createApp } from 'vue'
import App from './App.vue'
import managerRouter from "./manager/router.js"
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'

import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";


const app = createApp(App)
app.use(managerRouter)
app.use(PrimeVue)
app.use(ConfirmationService)
app.use(ToastService)
app.mount('#app')