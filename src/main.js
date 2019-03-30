import Vue from 'vue'
import App from './App.vue'
import Components from './views/components.vue'

new Vue({
  el: '#app',
  render: h => h(Components)
})
