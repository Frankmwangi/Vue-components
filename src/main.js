import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.filter('to-lowercase',function(value){
  return value.toLowerCase();
});
new Vue({
  el: '#app',
  render: h => h(App)
})
