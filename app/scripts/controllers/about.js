'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('StudentCtrl', ['StudentService', function (StudentService) {
    this.student = StudentService.get();
  }]);
