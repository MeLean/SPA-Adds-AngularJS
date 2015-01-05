'use strict';
adsApp.controller('MainController', function ($scope, requestManager, baseUrl) {

    requestManager.getDataFromUrl(baseUrl + 'ads').then(function (data) {
        displayAds(data);
    });

    requestManager.getDataFromUrl(baseUrl + 'towns').then(function (data) { 
        $scope.towns = data;
    });

    requestManager.getDataFromUrl(baseUrl + 'categories').then(function (data) {
        $scope.categories = data;
    });

    $scope.updateAds = function (categoryFilter, townFilter, startPage, adsPerPage) {
        var categoryUrlRequest = makeUrlForRequest(categoryFilter, 'CategoryId=');
        var townRequest = makeUrlForRequest(townFilter, '&TownId=');
        var pageRequest = startPage || 1;
        var pageSizeRequest = adsPerPage || 10;
        console.log(baseUrl + 'Ads?' + categoryUrlRequest + townRequest + '&StartPage=' + startPage + '&PageSize=10'); //todo delete this
        requestManager.getDataFromUrl(baseUrl + 'Ads?' + categoryUrlRequest + townRequest +
            '&StartPage=' + pageRequest + '&PageSize=' + pageSizeRequest)
                   .then(function (data) {
                       displayAds(data);
                   });
    }

    function makeUrlForRequest(filter, str) {
        if (filter) {
            return str + filter;
        } else {
            return '';
        }
    }

    function displayAds(data) {
        var pages = data.numPages;
        var pagesArr = [];

        $scope.ads = data.ads;

        for (var i = 1; i <= pages; i++) {
            pagesArr.push(i);
        }

        $scope.pagesArr = pagesArr;
    }
});