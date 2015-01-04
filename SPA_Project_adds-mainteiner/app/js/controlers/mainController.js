'use strict';
adsApp.controller('MainController', function($scope, adsData) {
    var url = 'http://softuni-ads.azurewebsites.net/api/Ads'; // TODO edit it
    adsData.getAds(url).then( function(data) {
        $scope.Ads = data.ads;
    });  
});