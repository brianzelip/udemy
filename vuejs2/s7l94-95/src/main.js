import Vue from 'vue';
import App94 from './App-root-component.vue';
import App95 from './App-creating-a-component.vue';

new Vue({
  el: '[data-vue="root-component"]',
  render: h => h(App94)
});
new Vue({
  el: '[data-vue="creating-a-component"]',
  render: h => h(App95)
});
