import Vue from 'vue'
import Router from 'vue-router'
import CesiumView from '@/components/CesiumView'
import WebGL from '@/components/webgl/WebGL'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'CesiumView',
      component: CesiumView
    },{
      path:'/webGL',
      name:'/webGL',
      component: WebGL
    }
  ]
})
