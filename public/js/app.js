'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.  
    when('/home', {
      templateUrl: 'partials/home',
      controller: 'homeCtrl'
    }).
    when('/account', {
      templateUrl: 'partials/account',
      controller: 'acctCtrl'
    }).
    when('/reports', {
      templateUrl: 'partials/reports',
      controller: 'reportsCtrl'
    }).
    when('/task', {
      templateUrl: 'partials/task',
      controller: 'taskCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
