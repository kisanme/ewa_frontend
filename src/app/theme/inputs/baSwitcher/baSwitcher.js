/**
 * @author v.lugovsky
 * created on 10.12.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.inputs')
      .directive('baSwitcher', baSwitcher);

  /** @ngInject */
  function baSwitcher() {
    return {
      templateUrl: 'app/theme/inputs/baSwitcher/baSwitcher.html',
      scope: {
        switcherStyle: '@',
        switcherValue: '=',
        featureCode: '='
      },
      controller: ['$scope', '$timeout', '$rootScope',
      function ($scope, $timeout, $rootScope) {
        if ($scope.featureCode) {
          $scope.$watch('switcherValue', function (new_value, old_value, item) {
            if (new_value !== old_value) {
              var vas_update = {
                service: $scope.featureCode,
                new_value: new_value,
                old_value: old_value
              };
              $scope.$emit('feature-code-changed', vas_update);
            }              
          });          
        }        
      }]
    };
  }

})();
