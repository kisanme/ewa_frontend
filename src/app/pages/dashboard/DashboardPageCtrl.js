/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.profile')
    .controller('DashboardPageCtrl', DashboardPageCtrl);

  /** @ngInject */
  function DashboardPageCtrl($scope, User, $window) {

    var mobile_number = $window.localStorage.getItem('mobile_number');
      User.login(mobile_number).then(function (ex) {
        $scope.user_details = User.getCurrentUser();
        $window.location.reload();
        $window.location.assign('/#/bills/current');
      });
  }

})();
