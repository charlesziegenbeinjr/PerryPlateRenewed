import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'

Vue.config.productionTip = false

Vue.use(Vuetify)
import "vuetify/dist/vuetify.min.css";

new Vue({
  vuetify: new Vuetify(), //<-----
  render: h => h(App),
}).$mount('#app')
