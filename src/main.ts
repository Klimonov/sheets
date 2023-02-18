import { createApp } from 'vue'
import './style.css'
import {router} from './router'
import App from './App.vue'
import AppIcon from './components/AppIcon.vue';
import AppContainer from './components/AppContainer.vue';

createApp(App)
    .component('AppIcon', AppIcon)
    .component('AppContainer', AppContainer)
    .use(router)
    .mount('#app')
