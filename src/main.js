import Vue from 'vue'
import Index from './Index.vue'
import './rem'
Vue.config.productionTip = false

new Vue({
  render: h => h(Index),
}).$mount('#app')
