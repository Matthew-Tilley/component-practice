import Vue from 'vue'
import App from './App.vue'
import Tester from "./Tester.vue"

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: "#Tester",
  render: h => h(Tester)
})