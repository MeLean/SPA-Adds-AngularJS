'use strict';
var adsApp = angular.module('adsApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider 
            .when('/', {
                templateUrl: 'app/templates/home.html'
            }).when('/login-form', {
                templateUrl: 'app/templates/login-form.html'
            }).when('/register-form', {
                templateUrl: 'app/templates/register-form.html'
            }).otherwise({ redirectTo: 'app/templates/home.html'});
    })
    .constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api/');