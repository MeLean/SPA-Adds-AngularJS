'use strict';
adsApp.controller('MainController', function ($scope, requestManager) {
    var baseUrl = 'http://softuni-ads.azurewebsites.net/api/';

    requestManager.getDataFromUrl(baseUrl + 'ads').then(function (data) {
        $scope.ads = data.ads;
    });

    requestManager.getDataFromUrl(baseUrl + 'towns').then(function (data) {
        $scope.towns = data;
    });

    requestManager.getDataFromUrl(baseUrl + 'categories').then(function (data) {
        $scope.categories = data;
    });
});