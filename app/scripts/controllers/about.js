(function(){
  'use strict';

  /**
  * @ngdoc function
  * @name workspaceApp.controller:AboutCtrl
  * @description
  * # AboutCtrl
  * Controller of the workspaceApp
  */
  angular.module('workspaceApp')
  .controller('StudentCtrl', StudentCtrl);

  StudentCtrl.$inject = ['StudentService'];

  function StudentCtrl(StudentService) {
    this.student = StudentService.get();
  };

})();
