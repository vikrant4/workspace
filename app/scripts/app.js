'use strict';

/**
 * @ngdoc overview
 * @name workspaceApp
 * @description
 * # workspaceApp
 *
 * Main module of the application.
 */
angular
  .module('workspaceApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    //
  // For any unmatched url, redirect to /form
  $urlRouterProvider.otherwise("/form");
  //
  // States definition, form_state to get student details and Student_state to print them
  $stateProvider
    .state('form', {
      url: "/form",
      templateUrl: "views/form.html",
      controller: 'FormCtrl as form'
    })
    .state('student', {
      url: "/student",
      templateUrl: "views/student.html",
      controller: 'StudentCtrl as student'
    });
  });
