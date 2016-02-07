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
  var ds = this;

  ds.student = {};
  ds.degrees = ['B.Tech', 'M.Tech', 'BCA', 'MCA', 'B.Sc', 'M.Sc', 'BA', 'MA'];
  ds.states = ['Uttar Pradesh', 'Maharashtra', 'Bihar', 'West Bengal',
  'Madhya Pradesh', 'Tamil Nadu', 'Rajasthan', 'Karnataka','Gujarat',
  'Andhra Pradesh', 'Odisha', 'Telangana','Kerala', 'Jharkhand', 'Assam',
  'Punjab', 'Chhattisgarh','Haryana', 'Jammu and Kashmir', 'Uttarakhand',
  'Himachal Pradesh','Tripura', 'Meghalaya', 'Manipur', 'Nagaland', 'Goa',
  'Arunachal Pradesh','Mizoram', 'Sikkim', 'Delhi', 'Puducherry', 'Chandigarh',
  'Andaman and Nicobar Islands', 'Dadar and Nagar Haveli', 'Daman and Diu',
  'Lakshadweep'];

  //Public API
  return {
    get: function(){
      return ds.student;
    },
    set: function(newStudent){
      ds.student = newStudent;
    },
    degree_options: function(){
      return ds.degrees;
    },
    state_options: function(){
      return ds.states;
    }

  };
}]);
