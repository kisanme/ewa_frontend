/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.bills.current', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('bills.current', {
          url: '/current',
          title: 'Current Bill',
          templateUrl: 'app/pages/bills/currentBill/currentBills.html',
          controller: 'CurrentBillsCtrl',
          sidebarMeta: {
            order: 0,
          },
        });
  }

})();
