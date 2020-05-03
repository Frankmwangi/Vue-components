import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.directive('highlight',{
  bind(el,binding,vnode){
   // el.style.backgroundColor = 'green';
   //el.style.backgroundColor = binding.value;
   var delay = 0;
   if(binding.modifiers['delayed']){
     delay = 3000;
   }
   setTimeout(()=> {
    if(binding.arg =='background'){
      el.style.backgroundColor = binding.value;
     }else{
       el.style.color = binding.value;
  
     }
   }, delay);
  
  }
});


new Vue({
  el: '#app',
  render: h => h(App)
})
