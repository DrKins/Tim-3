import Vue from 'vue'
import VueRouter from 'vue-router'
import Pocetna from '../views/Pocetna.vue'
import Generiranje from "../views/Generiranje";
import Izvlacenje from "../views/Izvlacenje.vue";
import Rezultati from "../views/Rezultati.vue";
import Posljednja from "../views/Rezultati.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Pocetna',
    component: Pocetna
  },
  {
    path: '/izvlacenje',
    name: 'Izvlacenje',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Izvlacenje.vue')
    component: Izvlacenje
  },
  {
    path: '/generiranje',
    name: 'Generiranje',
    component: Generiranje
  },
  {
    path: '/rezultati',
    name: 'Rezultati',
    component: Rezultati
  },
  {
    path:'/posljednja',
    name: 'Posljednja',
    component: Posljednja
  }
]

const router = new VueRouter({
  routes
})

export default router
