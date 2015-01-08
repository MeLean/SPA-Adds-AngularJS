'use strict';
var adsApp = angular.module('adsApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider 
            .when('/', {
                templateUrl: 'app/templates/home.html'
            }).when('/login-form', {
                templateUrl: 'app/templates/login-form.html'
            }).when('/register-form', {
                templateUrl: 'app/templates/register-form.html'
            }).when('/publish-new-ad', {
                templateUrl: 'app/templates/publish-ad.html'
            })
            .otherwise({ redirectTo: 'app/templates/home.html' });
    }])
    .constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api/');