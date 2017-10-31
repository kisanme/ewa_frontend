/**
 * @author Nasik Shafeek
 * created on 26.10.2017
 */
(function () {
  'use strict';
  
  angular.module('BlurAdmin.pages.vas', [])
    .config(routeConfig);
  
  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('vas', {
        url: '/vas',
        templateUrl : 'app/pages/vas/vas.html',
        controller: 'VasPageCtrl',
        title: 'VAS',
        sidebarMeta: {
          icon: 'ion-paper-airplane',
          order: 0,
        },
      });
  }
  
})();
