import Vue from 'vue';
import App from './src/App.vue';

Vue.filter('wordCount', function(value) {
  if (!value) return '';
  const count = value.length;
  return `${value} (${count})`;
});

new Vue({
  el: '[data-vue="app"]',
  render: h => h(App)
});
