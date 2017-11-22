/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .directive('pageTop', pageTop);

  /** @ngInject */
  function pageTop() {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/pageTop/pageTop.html',
      controller: (['$scope', 'User', '$window', '$location', function ($scope, User, $window, $location) {
        $scope.user = User.getCurrentUser();
        console.log($scope.user);

        $scope.signOut = function () {
          $window.localStorage.clear();
          $window.location.reload();
        };
      }])
    };
  }

})();