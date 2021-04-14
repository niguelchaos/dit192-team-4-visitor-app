import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'

import L from 'leaflet'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './styles/main.css'
import './styles/variables.css'
import 'leaflet/dist/leaflet.css'
delete L.Icon.Default.prototype._getIconUrl

Vue.use(BootstrapVue)

Vue.component('l-map', LMap)
Vue.component('l-tile-layer', LTileLayer)
Vue.component('l-marker', LMarker)

Vue.config.productionTip = false

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

new Vue({
  router,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')
