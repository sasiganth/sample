'use strict';

var app = angular.module('gopaddleAdminApp', ['ngCookies', 'ngResource', 'ngRoute', 'ngSanitize','ngTable','ngMaterial'])
  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
        
      })
      .when('/views/list',{
        templateUrl:'views/list.html',
        controller:'requestCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });      
  }]);
