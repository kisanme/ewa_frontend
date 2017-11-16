/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.user.register')
    .controller('RegisterCtrl', ProfilePageCtrl);

  /** @ngInject */
  function ProfilePageCtrl($scope, $rootScope, fileReader, $filter, $uibModal, User) {

    // Hide sidebar and header when these pages are loaded
    $rootScope.sidebar_hide = true;
    $rootScope.header_hide = true;

    // When the app navigates away from this controller, re-load the header and sidebar in
    $scope.$on('$stateChangeStart', function (event) {
      $rootScope.header_hide = false;
      $rootScope.sidebar_hide = false;
    });

    $scope.validatePassword = function () {
      if ($scope.password === $scope.confirm_password) {
        return true;
      }
      return false;
    };

    $scope.signUp = function () {
      if ($scope.validatePassword() == true) {
        var sign_up_obj = {
          email: $scope.email,
          number: $scope.number,
          password: $scope.password
        }
      } else {
        console.log("Password mismatching");
      }
    };
  }

})();
