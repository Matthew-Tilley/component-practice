import Vue from 'vue'
import App from './App.vue'
import Second from "./Second.vue"
import Third from "./Third.vue"

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({

  el: "#something",
  render: h => h(Second)

})


new Vue({

  el: "#anotherThing",
  render: h => h(Third)


})