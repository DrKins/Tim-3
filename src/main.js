import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import CircularCountDownTimer from "vue-circular-count-down-timer";
import VueConfetti from 'vue-confetti';
import VueHtmlToPaper from 'vue-html-to-paper';
import ToggleButton from 'vue-js-toggle-button';
 
Vue.use(ToggleButton);

const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes'
  ],
  styles: [
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
  ]
}

Vue.use(VueHtmlToPaper, options);
Vue.use(CircularCountDownTimer);
Vue.use(VueConfetti);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
