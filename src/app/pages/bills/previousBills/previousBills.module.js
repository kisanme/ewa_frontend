/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.bills.previous', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('bills.previous', {
          url: '/previous',
          title: 'Previous Bills',
          templateUrl: 'app/pages/bills/previousBills/previousBills.html',
          controller: 'PreviousBillsCtrl',
          sidebarMeta: {
            order: 1,
          },
        });
  }

})();
