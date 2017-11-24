/**
 * @author Nasik Shafeek
 * created on 26.10.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.user.login')
    .controller('LoginCtrl', LoginCtrl);

  /** @ngInject */
  function LoginCtrl($scope, $rootScope, Restangular, BACKEND, $httpParamSerializerJQLike, $window, User, $location, toastr) {
    var oauth_api = 'oauth-module/oauth';
    Restangular.setBaseUrl(BACKEND.baseResource);

    // Hide sidebar and header when these pages are loaded
    $rootScope.sidebar_hide = true;
    $rootScope.header_hide = true;

    
    // When the app navigates away from this controller, re-load the header and sidebar in
    $scope.$on('$stateChangeStart', function (event) {
      $rootScope.header_hide = false;
      $rootScope.sidebar_hide = false;
    });

    $scope.login = function() {
      console.log($scope.number, $scope.password);
      var post_obj = {
        grant_type: "password",
        username: $scope.number,
        password: $scope.password
      };
      Restangular.setDefaultHeaders({});

      Restangular
        .one(oauth_api)
        .one('token')
        .customPOST($httpParamSerializerJQLike(post_obj), '', {}, {
        'Authorization': "Basic Y2xpZW50SWRQYXNzd29yZDpzZWNyZXQ=",
        'Content-Type': "application/x-www-form-urlencoded"
      })
        .then(function (response, error) {
          console.log(response.plain());
          var results = response.plain();
          $window.localStorage.setItem('mobile_number', $scope.number);
          $window.localStorage.setItem('token', results.access_token);
          $window.location.reload();
          $location.path('/dashboard');
        })
        .catch(function(response) {
          toastr.error("Error in logging in, please try again!", 'Error');
        })
        ;
    };
  }

})();
