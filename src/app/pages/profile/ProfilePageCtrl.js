/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.profile')
    .controller('ProfilePageCtrl', ProfilePageCtrl);

  /** @ngInject */
  function ProfilePageCtrl($scope, fileReader, User, $uibModal, toastr) {
    $scope.unconnect = function (item) {
      item.href = undefined;
    };

    $scope.user_details = {};

    User.getRemoteCurrentUser().then(function (response) {
      if (!(response.data)) {
        console.error("Response not available!");
      }
      $scope.user_details = response.data;
    });

    $scope.updateProfile = function () {
      delete($scope.user_details.mobileNumber);
      delete($scope.user_details.email);
      User.updateUserDetails($scope.user_details).then(function (response) {
        if (response.statusCode == 200) {
          toastr.success('Details changed successfully, will be updated on next login', 'User details changed!');
        } else {
          toastr.error('An error occured, please try again!', 'Error!');
        }
      });
    };
  }

})();
