import Vue from 'vue';
import App from './App.vue';

export const eventBus = new Vue(); //needs to be created before the main Vue instance that contains our components!

new Vue({
  el: '#app',
  render: h => h(App)
});
