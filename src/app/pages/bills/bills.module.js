/**
 * @author Nasik Shafeek
 * created on 26.10.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.bills', [
      'BlurAdmin.pages.bills.current',
      'BlurAdmin.pages.bills.previous',
      'BlurAdmin.pages.bills.payment'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('bills', {
            url: '/bills',
            template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
            abstract: true,
            title: 'Bills',
            sidebarMeta: {
                icon: 'ion-clipboard',
                order: 0,
            },
        });
  }

})();
