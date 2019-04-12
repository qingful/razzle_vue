import { createVueApp } from './App';

// VUE
const { app } = createVueApp();
app.$mount('#vue');

if (module.hot) {
  module.hot.accept();
}
