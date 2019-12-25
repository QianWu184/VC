import Vue from 'vue'
import Router from 'vue-router'
import CesiumView from '@/components/CesiumView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CesiumView',
      component: CesiumView
    }
  ]
})
