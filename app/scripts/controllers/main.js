'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:MainCtrl
 * @description
 * # FormCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('FormCtrl', ['StudentService', '$state', function(StudentService, $state) {

    this.student = StudentService.get();

    this.today = new Date();

    this.degrees = ['B.Tech', 'M.Tech', 'BCA', 'MCA', 'B.Sc', 'M.Sc', 'BA', 'MA'];

    this.states = ['Uttar Pradesh', 'Maharashtra', 'Bihar', 'West Bengal',
    'Madhya Pradesh', 'Tamil Nadu', 'Rajasthan', 'Karnataka','Gujarat',
    'Andhra Pradesh', 'Odisha', 'Telangana','Kerala', 'Jharkhand', 'Assam',
    'Punjab', 'Chhattisgarh','Haryana', 'Jammu and Kashmir', 'Uttarakhand',
    'Himachal Pradesh','Tripura', 'Meghalaya', 'Manipur', 'Nagaland', 'Goa',
    'Arunachal Pradesh','Mizoram', 'Sikkim', 'Delhi', 'Puducherry', 'Chandigarh',
    'Andaman and Nicobar Islands', 'Dadra and Nagar Haveli', 'Daman and Diu',
    'Lakshadweep'];

    this.reset = function(){
      this.student = {};
      StudentService.set(this.student);
    };

    this.submit = function(){
      StudentService.set(this.student);
      $state.go('^.student');
    };
  }]);
