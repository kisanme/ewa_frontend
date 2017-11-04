/**
 * @author Nasik Shafeek
 * created on 26.10.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.conf', [
    'ui.router'
  ])
      .constant('BACKEND', {
          baseResource: 'http://localhost:8080/'
      });
})();
