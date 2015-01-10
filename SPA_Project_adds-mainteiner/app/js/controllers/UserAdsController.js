'use strict';

adsApp.controller('UserAdsController', ['$scope', '$location', '$rootScope', 'requestManager', 'baseUrl', 'messaging', 'authentification',
    function ($scope, $location, $rootScope, requestManager, baseUrl, messaging, authentification) {
        var isLogged = authentification.isLogged(); 
        if (isLogged) { 
            var pageRequest = $rootScope.startPage || 1;
            var pageSizeRequest = $rootScope.adsPerPage || 10;
            var status = '';  //todo fix status request
            var databaseUrl = baseUrl + 'user/ads?' + status + '&StartPage=' + pageRequest + '&PageSize=' + pageSizeRequest;
            requestManager.getDataFromUrl(databaseUrl).then(function (data) {
               $scope.ads = data.ads;
               console.log(data);
            }, function (error) {
                messaging.errorMsg('There was a problem getting data! Message: ' + error.message);
            });
        } else {
            $location.path('/please-login');
        }


    }]);