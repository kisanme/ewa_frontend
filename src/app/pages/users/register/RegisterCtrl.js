/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.user.register')
    .controller('RegisterCtrl', RegisterCtrl);

  /** @ngInject */
  function RegisterCtrl($scope, $rootScope, $location, User, toastr) {

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
      event.preventDefault();
      if ($scope.validatePassword() == true) {
        var sign_up_obj = {
          email: $scope.email,
          userName: $scope.number,
          password: $scope.password
        };
        User.register(sign_up_obj).then(function (results) {
          if (results == false) {
            toastr.error("Error in registering, please try again!", 'Error');
          } else {
            toastr.info("Registered successfully, redirecting to the login page now...", 'Information');
            setTimeout(function () {
              $location.path('/user/login');            
            }, 2000);
          }
        })
      } else {
        toastr.error("Password mismatching", 'Error');
      }
    };
  }

})();
