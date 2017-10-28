/**
 * @author Nasik <nasik2ms@gmail.com>
 */
(function () {
    'use strict';

    angular.module('BlurAdmin')
        .factory('User', UserService);

    function UserService($http) {
        var services = {};

        /**
         * Logged in User object
         * @returns {object}
         */
        services.getCurrentUser = function () {
            return {};
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
        services.login = function () {
            return true;
        };

        return services;
    }
})();
