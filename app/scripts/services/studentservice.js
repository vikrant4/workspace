'use strict';

/**
 * @ngdoc service
 * @name workspaceApp.StudentService
 * @description
 * # StudentService
 * Factory in the workspaceApp.
 */
angular.module('workspaceApp')
.factory('StudentService', [function(){
  var student = {};

  //Public API
  return {
    get: function(){
      return student;
    },
    set: function(newStudent){
      student = newStudent;
    }
  };
}]);
