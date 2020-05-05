import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueResource);
Vue.http.options.root ='https://vue-http-57af5.firebaseio.com/data.json';
new Vue({
  el: '#app',
  render: h => h(App)
})
