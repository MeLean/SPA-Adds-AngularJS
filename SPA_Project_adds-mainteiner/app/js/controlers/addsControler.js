'use strict';
addsApp.controller('AddsController', function($scope, addsData) {
    var url = '/'; // TODO edit it
    addsData.getAdds(url, function(data) {
        $scope.Adds = data;
    });

});