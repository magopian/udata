'use strict';

/**
 * Styles
 */
require('../less/home.less');

// Catch all errors
// require('raven');

var $ = require('jquery');
require('bootstrap');

// require('site');

$('.carousel').carousel();

// var Vue = require('vue'),
//     config = require('config');

// Vue.config.debug = config.debug;
// Vue.use(require('plugins/util'));
// Vue.use(require('plugins/text'));
// Vue.use(require('plugins/jquery'));
// Vue.use(require('plugins/i18next'));
// Vue.use(require('plugins/markdown'));
// Vue.use(require('plugins/scroll-to'));
// Vue.use(require('plugins/router'), {prefix: config.root});

// $(require('api')).on('built', function() {
//     var app = new Vue(require('app.vue'));
//     app.$mount('#app');
// });

