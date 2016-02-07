(function(){
  'use strict';

  /**
  * @ngdoc function
  * @name workspaceApp.controller:MainCtrl
  * @description
  * # FormCtrl
  * Controller of the workspaceApp
  */
  angular.module('workspaceApp')
  .controller('FormCtrl', FormCtrl);
  FormCtrl.$inject = ['StudentService', '$state'];

  function FormCtrl(StudentService, $state) {

    var form = this;

    form.student = StudentService.get();
    form.today = new Date();
    form.reset = reset;
    form.submit = submit;
    form.degrees = StudentService.degree_options();
    form.states = StudentService.state_options();

    function submit(){
      StudentService.set(form.student);
      $state.go('student');
    }

    function reset(){
      form.student = {};
      StudentService.set(form.student);
    }
  }
})();
