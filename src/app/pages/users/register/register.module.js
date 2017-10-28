/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.user.register', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('user.register', {
          url: '/register',
          title: 'Register into SriTel',
          templateUrl: 'app/pages/users/register/register.html',
          controller: 'RegisterCtrl',
        });
  }

})();
