/**
 * @author Nasik Shafeek
 * created on 26.10.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.profile')
    .controller('VasPageCtrl', VasPageCtrl);

  /** @ngInject */
  function VasPageCtrl($scope, fileReader, $filter, $uibModal) {
    $scope.vas = {
      "messaging": [
        {
          "name": "Short Messaging Service",
          "status": true
        }
      ],
      "information_services": [
        {
          "name": "Stock Alert News",
          "status": false
        },
        {
          "name": "Location Based Service",
          "status": true
        },
        {
          "name": "Cricket News Alert",
          "status": false
        },
      ],
      "call_management": [
        {
          "name": "Call Conferencing",
          "status": true
        }
      ],
      "mobile_entertainment": [
        {
          "name": "SriTel Mobile Music",
          "status": false
        },
        {
          "name": "MYTV",
          "status": false
        },
      ],
      "others": [
        {
          "name": "Live@8 English",
          "status": true
        },
        {
          "name": "Call Blocking",
          "status": false
        },
        {
          "name": "Bulk Free Minutes",
          "status": false
        },
      ],
    };
  
    console.log($scope.vas);
  }

})();
