'use strict';

var app = angular.module('gopaddleAdminApp', ['ngCookies', 'ngResource', 'ngRoute', 'ngSanitize'])
  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
