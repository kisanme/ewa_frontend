/**
 * @author Nasik <nasik2ms@gmail.com>
 */
(function () {
    'use strict';

    angular.module('BlurAdmin')
        .factory('User', UserService);

    function UserService(Restangular, BACKEND, $window) {
        var user_module = 'user-module/api';
        Restangular.setBaseUrl(BACKEND.baseResource);

        var services = {};

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
            return 1;
        };

        /**
         * Registration of a user into the system
         * @returns {boolean}
         */
        services.register = function () {
            return true;
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
