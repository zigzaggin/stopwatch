import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import DatetimePicker from 'vuetify-datetime-picker'

Vue.use(DatetimePicker);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app');
