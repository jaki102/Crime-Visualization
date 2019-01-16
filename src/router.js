import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'poland',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component() {
        return import(/* webpackChunkName: "about" */ './views/Poland.vue');
      },
    },
    {
      path: '/zachodniopomorskie',
      name: 'zp',
      component() {
        return import('./views/ZP.vue');
      },
    },
    {
      path: '/swietokrzyskie',
      name: 'sk',
      component() {
        return import('./views/SK.vue');
      },
    },
    {
      path: '/dolnoslaskie',
      name: 'ds',
      component() {
        return import('./views/DS.vue');
      },
    },
    {
      path: '/warminsko-mazurskie',
      name: 'wn',
      component() {
        return import('./views/WN.vue');
      },
    },
    {
      path: '/kujawsko-pomorskie',
      name: 'kp',
      component() {
        return import('./views/KP.vue');
      },
    },
    {
      path: '/mazowieckie',
      name: 'mz',
      component() {
        return import('./views/MZ.vue');
      },
    },
    {
      path: '/malopolskie',
      name: 'ma',
      component() {
        return import('./views/MA.vue');
      },
    },
    {
      path: '/opolskie',
      name: 'op',
      component() {
        return import('./views/OP.vue');
      },
    },
    {
      path: '/podlaskie',
      name: 'pd',
      component() {
        return import('./views/PD.vue');
      },
    },
    {
      path: '/podkarpackie',
      name: 'pk',
      component() {
        return import('./views/PK.vue');
      },
    },
    {
      path: '/pomorskie',
      name: 'pm',
      component() {
        return import('./views/PM.vue');
      },
    },
    {
      path: '/slaskie',
      name: 'sl',
      component() {
        return import('./views/SL.vue');
      },
    },
    {
      path: '/wielkopolskie',
      name: 'wp',
      component() {
        return import('./views/WP.vue');
      },
    },
    {
      path: '/lodzkie',
      name: 'ld',
      component() {
        return import('./views/LD.vue');
      },
    },
    {
      path: '/lubuskie',
      name: 'lb',
      component() {
        return import('./views/LB.vue');
      },
    },
    {
      path: '/lubelskie',
      name: 'lu',
      component() {
        return import('./views/LU.vue');
      },
    },
  ],
});
