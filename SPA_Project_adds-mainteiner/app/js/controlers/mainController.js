'use strict';
adsApp.controller('MainController', function ($scope, requestManager) {
    var adsUrl = 'http://softuni-ads.azurewebsites.net/api/Ads'; // TODO edit it
    requestManager.getDataFromUrl(adsUrl).then(function(data) {
        $scope.ads = data.ads;
    });  
});