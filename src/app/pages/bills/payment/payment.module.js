/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.bills.payment', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('bills.payment', {
          url: '/payment?amount&bill_id',
          title: 'Pay the current bill',
          templateUrl: 'app/pages/bills/payment/payment.html',
          controller: 'PaymentCtrl',
          reloadOnSearch : true
        });
  }

})();
