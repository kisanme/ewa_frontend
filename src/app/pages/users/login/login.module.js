/**
 * @author Nasik Shafeek
 * created on 26.10.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.user.login', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('user.login', {
          url: '/login',
          title: 'Login',
          templateUrl: 'app/pages/users/login/login.html',
          controller: 'LoginCtrl',
        });
  }

})();
