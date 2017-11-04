/**
 * @author Nasik Shafeek
 * created on 26.10.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.profile')
    .controller('VasPageCtrl', VasPageCtrl);

  /** @ngInject */
  function VasPageCtrl($scope, toastr, $filter, $uibModal, BACKEND, Restangular, baProgressModal) {
    var mobile_number = '0714244978';
    var vas_api = 'vas-module/api';

    // TODO - Set into global configuration
    Restangular.setBaseUrl(BACKEND.baseResource);

    function toastMessage(title, message, type) {
      toastr.info(message, title, {
        "autoDismiss": false,
        "positionClass": "toast-top-right",
        "type": type,
        "timeOut": "5000",
        "extendedTimeOut": "2000",
        "allowHtml": false,
        "closeButton": false,
        "tapToDismiss": true,
        "progressBar": false,
        "newestOnTop": true,
        "maxOpened": 0,
        "preventDuplicates": false,
        "preventOpenDuplicates": false
      });
    }

    function activateVas(vas_code) {
      // activate using mobile number and vas code
      if (vas_code) {
        Restangular
          .one(vas_api)
          .one('activateVasService', mobile_number)
          .one(vas_code)
          .get()
          .then(function (response) {
            if (response.status == "Successfully Activated") {
              toastMessage(vas_code+' activated successfully!', 'VAS Activation', "info");
            } else {
              toastMessage('Error in activating!', 'VAS Activation', "error");
            }
        });
      }
    }

    function deactivateVas(vas_code) {
      // de-activate using mobile number and vas code
      if (vas_code) {
        Restangular
          .one(vas_api)
          .one('deactivateVasService', mobile_number)
          .one(vas_code)
          .get()
          .then(function (response) {
            if (response.status == "Successfully Deactivated") {
            toastMessage(vas_code+' de-activated successfully!', 'VAS Deactivation', "info");
            } else {
              toastMessage('Error in de-activating!', 'VAS Deactivation', "error");
            }
        });
      }
    }

    function updateChoice(vas) {
      // Modal for confirmation presumably
      // trigger vas updates based on current choices
      if (vas.service && vas.new_value == true) {
        // Activation
        activateVas(vas.service);
      } else if (vas.service && vas.new_value == false) {
        deactivateVas(vas.service);
      }
    }

    $scope.$on('feature-code-changed', function (event, changed_data) {
      updateChoice(changed_data);
    });

    // Get all the features
    Restangular.one(vas_api).getList('getAllFeatureList').then(function (vas) {

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
    
    $scope.open = function (page, size) {
      $uibModal.open({
        animation: true,
        templateUrl: page,
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
    };
    $scope.openProgressDialog = baProgressModal.open;

  }

})();
