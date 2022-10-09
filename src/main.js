import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSmoothScroll from 'vue3-smooth-scroll'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './styles/index.css'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faLinkedin, faBars, faGithubSquare)

createApp(App)
.use(store)
.use(router)
.use(VueSmoothScroll)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
