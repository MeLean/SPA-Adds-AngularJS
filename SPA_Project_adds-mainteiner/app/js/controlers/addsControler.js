'use strict';
addsApp.controller('AddsController', function($scope, addsData) {
    var url = 'http://softuni-ads.azurewebsites.net/api/Ads'; // TODO edit it
    addsData.getAdds(url).then( function(data) {
        $scope.Adds = data.ads;
    });  
});