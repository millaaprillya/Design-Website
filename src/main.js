import Vue from 'vue'
import App from './App.vue'
import router from './router'

import toasted from 'vue-toasted'
import {
  BootstrapVue,
  IconsPlugin,
  AvatarPlugin,
  BadgePlugin
} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'animate.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
Vue.component('VueSlider', VueSlider)
Vue.use(VueSweetalert2)
Vue.use(toasted, {
  duration: 10000,
  position: 'top-right',
  action: {
    text: 'Close',
    onClick: (e, toastObject) => {
      toastObject.goAway(0)
    }
  }
})
Vue.use(BadgePlugin)
Vue.use(AvatarPlugin)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
