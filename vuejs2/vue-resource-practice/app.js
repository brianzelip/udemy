import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './src/App.vue';

Vue.use(VueResource);

Vue.http.options.root = 'https://hacker-news.firebaseio.com/v0/';

new Vue({
  el: '[data-vue="app"]',
  render: h => h(App)
});
