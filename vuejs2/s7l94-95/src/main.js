import Vue from 'vue';
import App94 from './App-root-component.vue';
import App95 from './App-creating-a-component.vue';
import Status from './StatusChanger-creating-a-component.vue';
import AppIndex from './App-index.vue';

Vue.component('status-changer', Status);

new Vue({
  el: '[data-vue="root-component"]',
  render: h => h(App94)
});
new Vue({
  el: '[data-vue="creating-a-component"]',
  render: h => h(App95)
});
new Vue({
  el: '[data-vue="index"]',
  render: h => h(AppIndex)
});
