import Vue from 'vue';
import AppRoot from './App-root.vue';
import AppGlobal from './App-global.vue';
import AppLocal from './App-local.vue';
import StatusChanger from './StatusChanger.vue';
import AppIndex from './App-index.vue';

Vue.component('status-changer-global', StatusChanger);

new Vue({
  el: '[data-vue="root"]',
  render: h => h(AppRoot)
});
new Vue({
  el: '[data-vue="global"]',
  render: h => h(AppGlobal)
});
new Vue({
  el: '[data-vue="local"]',
  render: h => h(AppLocal)
});
new Vue({
  el: '[data-vue="index"]',
  render: h => h(AppIndex)
});
