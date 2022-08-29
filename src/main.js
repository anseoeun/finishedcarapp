import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './js/ui.js'
import './components/index.js'

const bmwStyle = () => import('@/assets/css/style2.scss')

Vue.config.productionTip = false
switch('RED'){
  case 'RED' : {

    bmwStyle()
    break
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


