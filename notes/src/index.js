import Vue from 'vue'
import store from './vuex/store'
import App from './components/App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/styles/index.css'

new Vue({
  store, //注册组件 😏
  el: 'body',
  components: { App }
})
