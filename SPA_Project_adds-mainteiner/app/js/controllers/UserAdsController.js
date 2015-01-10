'use strict';

adsApp.controller('UserAdsController', ['$scope', '$location', '$rootScope', '$routeParams', 'requestManager', 'baseUrl', 'messaging', 'authentification',
    function ($scope, $location, $rootScope, $routeParams, requestManager, baseUrl, messaging, authentification) {
        var isLogged = authentification.isLogged(); 
        if (isLogged) { 
            var pageRequest = $rootScope.startPage || 1;
            var pageSizeRequest = $rootScope.adsPerPage || 10; 
            var databaseUrl = baseUrl + 'user/ads?' + 'StartPage=' + pageRequest + '&PageSize=' + pageSizeRequest;
            requestManager.getDataFromUrl(databaseUrl).then(function (data) {
                $scope.ads = data.ads;
            }, function (error) {
                messaging.errorMsg('There was a problem whit getting data! Message: ' + error.message);
            });

            $scope.deactivateAd = function (ad) {
                var adId = ad.id;
                var databaseUrl = baseUrl + 'user/ads/' + adId;
                requestManager.putSomeData(ad, databaseUrl).then(function(data) {
                    $location.path('/user/home'); //todo thik about it!!!
                    messaging.successMsg('The ad status was chaned successful!');
                }, function(error) {
                    messaging.errorMsg('There was a problem whit changing status! Message: ' + error.message);
                });
            }
            $scope.publishAd = function (ad) { 
                var adId = ad.id;
                var databaseUrl = baseUrl + 'user/ads/' + adId;
               
            } // todo write it 
            $scope.deleteAd = function(ad) {
                    
            }
        } else {
            $location.path('/please-login');
        }


    }]);