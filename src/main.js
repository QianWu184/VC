// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import {Button, Avatar, Icon, Modal } from 'iview'
import 'cesium/Widgets/widgets.css'
import 'iview/dist/styles/iview.css';

Vue.component('Avatar', Avatar)
Vue.component('i-icon', Icon)
Vue.component('i-modal', Modal)
Vue.component('i-button', Button)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
