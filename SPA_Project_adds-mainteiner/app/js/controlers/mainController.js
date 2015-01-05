'use strict';
adsApp.controller('MainController', function ($scope, requestManager) {
    var baseUrl = 'http://softuni-ads.azurewebsites.net/api/';

    requestManager.getDataFromUrl(baseUrl + 'ads').then(function (data) {
        $scope.ads = data.ads;

        var pages = data.numPages;
        var pagesArr = [];
        for (var i = 1; i <= pages; i++) {
            pagesArr.push(i);
        }

        $scope.pagesArr = pagesArr;
    });

    requestManager.getDataFromUrl(baseUrl + 'towns').then(function (data) { 
        $scope.towns = data;
    });

    requestManager.getDataFromUrl(baseUrl + 'categories').then(function (data) {
        $scope.categories = data;
    });
});