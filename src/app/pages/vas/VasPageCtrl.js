/**
 * @author Nasik Shafeek
 * created on 26.10.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.profile')
    .controller('VasPageCtrl', VasPageCtrl);

  /** @ngInject */
  function VasPageCtrl($scope, fileReader, $filter, $uibModal, BACKEND, Restangular) {
    var mobile_number = '0714244978';

    // TODO - Set into global configuration
    Restangular.setBaseUrl(BACKEND.baseResource);

    // Get all the features
    Restangular.one('vas-module', 'api').getList('getAllFeatureList').then(function (vas) {

      // All features
      var all_features = vas.plain();

      // Get features for the current user's mobile number
      Restangular.one('vas-module', 'api').one('getVasDetails').getList(mobile_number).then(function(vas_services) {
        $scope.vas = vas_services.plain();

        // Intercepting 2 seperate requests and adding descriptions into it
        for (var i = $scope.vas.length - 1; i >= 0; i--) {
          for (var k = all_features.length - 1; k >= 0; k--) {
            if ($scope.vas[i].featureCode == all_features[k].vasCode) {
              $scope.vas[i].description = all_features[k].description;
            }
          }
        }
      });
    });
    

  }

})();
