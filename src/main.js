import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehaviour(to,from,savedPosition){
    if(savedPosition){
      return savedPosition;
    }
    if(to.hash){
      return{selector: to.hash};
    }
    return {x:0, y:0};
  }
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
