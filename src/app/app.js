'use strict';

angular.module('BlurAdmin', [
  'ngAnimate',
  'ui.bootstrap',
  'ui.sortable',
  'ui.router',
  'ngTouch',
  'toastr',
  'smart-table',
  "xeditable",
  'ui.slimscroll',
  'ngJsTree',
  'angular-progress-button-styles',
  'restangular',

  'BlurAdmin.conf',
  'BlurAdmin.theme',
  'BlurAdmin.pages'
])
.config(function($windowProvider, $httpProvider) {
  var $window = $windowProvider.$get();

  if ($window.localStorage.getItem('token')) {
    
    $httpProvider.interceptors.push('httpInterceptor');
  } else {
    $window.location.assign('/#/user/login');
  }
})
.factory('httpInterceptor', function ($window) {
  var interceptor = this;
  interceptor.request = function (config) {
    config.headers.Authorization = 'Bearer '+$window.localStorage.getItem('token');
    return config;
  };
  interceptor.response = function (response) {
    return response;
  }
  return interceptor;
})
;