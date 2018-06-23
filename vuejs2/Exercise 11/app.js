import Vue from 'vue';
import App from './src/App.vue';

Vue.filter('to-lowercase', function(value) {
  return value.toLowerCase();
});

Vue.mixin({
  created() {
    console.log('Global Mixin - Created Hook');
  }
});

new Vue({
  el: '[data-vue="app"]',
  render: h => h(App)
});
