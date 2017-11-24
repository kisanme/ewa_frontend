/**
 * @author Nasik Shafeek
 * created on 26.10.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.bills.payment')
    .controller('PaymentCtrl', PaymentCtrl);

  /** @ngInject */
  function PaymentCtrl($scope, BACKEND, Restangular, $stateParams, User, toastr) {
    console.log($stateParams);

    var bill_api = 'bill-module/api';
    $scope.mobile_number = User.getCurrentUsersMobileNumber();
    $scope.page_size = 15;
    $scope.pay_amount = $stateParams.amount;
    $scope.bill_id = $stateParams.bill_id;
    console.log($scope.pay_amount, $scope.bill_id);
    

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
    });

    $scope.fetchDueDate = function (date_string) {
      var date = new Date(date_string);
      date.setDate(date.getDate() + 10);
      return date.toDateString();
    };

    $scope.pay = function() {
        toastr.success("Payment triggered successfully!", 'Payment triggered');
    }
  }

})();
