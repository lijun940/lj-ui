import Vue from 'vue'
import App from './App.vue'
import LjUI from '../packages'
Vue.config.productionTip = false
Vue.use(LjUI)
new Vue({
  render: h => h(App)
}).$mount('#app')
