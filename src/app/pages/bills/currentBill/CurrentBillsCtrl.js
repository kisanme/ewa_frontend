/**
 * @author Nasik Shafeek
 * created on 26.10.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.bills.current')
    .controller('CurrentBillsCtrl', CurrentBillsCtrl);

  /** @ngInject */
  function CurrentBillsCtrl($scope, BACKEND, Restangular, $stateParams) {
    var bill_api = 'bill-module/api';
    $scope.mobile_number = '0715566158';
    $scope.page_size = 15;
    

    Restangular.setBaseUrl(BACKEND.baseResource);

    // Get all the bills
    Restangular
      .one(bill_api)
      .one('getBillDetails')
      .one($scope.mobile_number)
      .get()
      .then(function (bill_details) {
        // All bills
        $scope.bill_response = bill_details.plain();
        $scope.bill = $scope.bill_response.bill[0];
        console.log($scope.bill_response, $scope.bill);
    });

    $scope.fetchDueDate = function (date_string) {
      var date = new Date(date_string);
      date.setDate(date.getDate() + 10);
      return date.toDateString();
    }
  }

})();
