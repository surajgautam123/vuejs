import Vue from 'vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import App from './App.vue'
import { routes } from './routes';

//Adding Charts
import Chart from 'chart.js'
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'
import Highcharts from 'highcharts'
window.Highcharts = Highcharts
Vue.use(VueChartkick, { Chartkick })

//Good Table
import VueGoodTable from 'vue-good-table';
Vue.use(VueGoodTable);

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuelidate);

const router = new VueRouter({
	mode: 'history',
	routes
});

Vue.http.options.root = 'https://tangobms.firebaseio.com/data.json';

new Vue({
  el: '#app',
  router,
  validations: {},
  render: h => h(App)
})
