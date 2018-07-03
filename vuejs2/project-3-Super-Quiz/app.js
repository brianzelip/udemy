import Vue from 'vue';
import App from './src/App.vue';

export const questionBus = new Vue();

new Vue({
  el: '[data-vue="app"]',
  render: h => h(App)
});
