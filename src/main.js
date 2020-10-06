import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/**
 * Bootstrap CSS
 */
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css"
Vue.use(BootstrapVue);

/**
 * https://bootstrap-vue.org/docs/components/table
 */
import TablePlugin from "bootstrap-vue";
Vue.use(TablePlugin);

/**
 * https://www.npmjs.com/package/gmap-vue
 */
import * as VueGoogleMaps from 'gmap-vue';
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_API_KEY,
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
