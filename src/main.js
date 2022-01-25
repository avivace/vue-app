// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// Vue base
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';

// Vuex
import axios from 'axios';
import base64 from 'base-64';
import querystring from 'querystring';
import vuetify from './plugins/vuetify';
import store from './store/index';

// Main components

// Application Style
import './main.styl';

//			Fonts
// UI
import 'typeface-roboto';
import 'typeface-open-sans';
// Monospaced
import 'typeface-roboto-mono';
import 'typeface-ubuntu-mono';
// Icons
import '@fortawesome/fontawesome-free/css/all.css';
// Logos, headers
import 'typeface-quicksand';
import 'typeface-overpass';
import 'typeface-overpass-mono';

// Components
import app from './App.vue';
import landing from './components/Landing';
import control from './components/Control';
import activityEditor from './components/ActivityEditor';
import settings from './components/Settings';
import gallery from './components/Gallery';
import activityList from './components/ActivityList';
import activity from './components/Activity';
// import help from './components/Help'
// import credits from './components/Credits'

import * as it_messages from './locale/it/messages.json';
import * as en_messages from './locale/en/messages.json';
import * as fr_messages from './locale/fr/messages.json';

// Utilities
// This is to serialize parameters to send them as URLencoded
// https://github.com/axios/axios/issues/350#issuecomment-227270046

// Configuration
Vue.use(VueRouter);
Vue.use(VueI18n);

Vue.prototype.$axios = axios.create();
Vue.prototype.$base64 = base64;
Vue.prototype.$qs = querystring;

Vue.config.productionTip = false;

// Routing
const routes = [
  { path: '/', component: landing, meta: { title: 'CoderBot' } },
  { path: '/control', component: control, meta: { title: 'CoderBot - Controlla' } },
  { path: '/program', component: activity, meta: { title: 'CoderBot - Blockly' } },
  { path: '/settings', component: settings, meta: { title: 'CoderBot - Impostazioni' } },
  { path: '/gallery', component: gallery, meta: { title: 'CoderBot - Galleria' } },
  // { path: '/help', component: help, meta: {title: 'CoderBot - Aiuto'}},
  // { path: '/credits', component: credits, meta: {title: 'CoderBot - Crediti'}},
  // { path: '/ar', component: arexample, meta: {title: 'CoderBot'} },
  { path: '/activity/new', component: activityEditor, meta: { title: 'CoderBot - Nuova Attività' } },
  { path: '/activity/open', component: activityList, meta: { title: 'CoderBot - Apri Attività' } },
  { path: '/activity/edit/:name', component: activityEditor, meta: { title: 'CoderBot - Modifica Attività' } },
  { path: '/activity/open/:name', component: activity, meta: { title: 'CoderBot - Programma' } },
];

const router = new VueRouter({
  routes, // short for `routes: routes` (ES6)
});

// This callback works as middleware: runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  // const nearestWithMeta = to.matched.slice().reverse().find((r) => r.meta && r.meta.metaTags);
  // nearestWithMeta;

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  next();
});

const messages = {
  it: {
    message: it_messages.default,
  },
  en: {
    message: en_messages.default,
  },
  fr: {
    message: fr_messages.default,
  },
};

// Create VueI18n instance with options
const i18n = new VueI18n({
  // locale: 'en', // set locale
  messages, // set locale messages
});

/* eslint-disable no-new */
new Vue({
  router,
  store,
  vuetify,
  i18n,
  el: '#app',
  render: (h) => h(app),
});
