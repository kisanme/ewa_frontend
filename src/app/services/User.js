/**
 * @author Nasik <nasik2ms@gmail.com>
 */
(function () {
    'use strict';

    angular.module('BlurAdmin')
        .factory('User', UserService);

    function UserService(Restangular, BACKEND, $window) {
        var user_module = 'user-module/api';
        var oauth_module = 'oauth-module';
        Restangular.setBaseUrl(BACKEND.baseResource);

        var services = {};

        services.getRemoteCurrentUser = function () {
            var mobile_number = services.getCurrentUsersMobileNumber();
            console.log(mobile_number);
            // user-module/api/user/mobile/0718847868
            return Restangular.one(user_module)
                .one('user')
                .one('mobile', mobile_number)
                .get()
                .then(function (results, error) {
                    return results.plain();
                });
        };

        services.updateUserDetails = function (user_obj) {
            return Restangular.one(user_module)
              .one('user/')
              .customPUT(user_obj)
              .then(function (response) {
                  return(response);
              });
        };

        services.getCurrentUsersMobileNumber = function () {
            return JSON.parse($window.localStorage.getItem('user')).mobileNumber;
        };

        /**
         * Logged in User object
         * @returns {object}
         */
        services.getCurrentUser = function () {
            return JSON.parse($window.localStorage.getItem('user'));
        };

        /**
         * Logged in user id getter
         * @returns {number}
         */
        services.getCurrentUserId = function () {
            return JSON.parse($window.localStorage.getItem('user')).id;
        };

        /**
         * Registration of a user into the system
         * @returns {boolean}
         */
        services.register = function (register_obj) {
            Restangular.setDefaultHeaders({});
            return Restangular.one(oauth_module)
                .one('api')
                .one('user/')
                .customPOST(register_obj, '', {}, {
                    'Content-Type': 'application/json'
                })
                .then(function (response, error) {
                    var results = response.plain();
                    if (results.statusCode == 200 && results.data != null) {
                        return results;
                    } else {
                        return false;
                    }
                });
        }

        services.updateCurrentUser = function (user_obj) {
            // Current user update service endpoint
        }

        /**
         * The function to login
         * @returns {boolean}
         */
        services.login = function (mobile_number) {
            return Restangular.one(user_module)
                .one('user')
                .one('mobile', mobile_number)
                .get()
                .then(function (response, error) {
                    console.log(response.plain());
                    $window.localStorage.setItem('user', JSON.stringify(response.plain().data));
                });
        };

        return services;
    }
})();
