﻿'use strict';

adsApp.controller('UserAdsController', ['$scope', '$location', '$route', 'requestManager', 'baseUrl', 'messaging', 'authentification',
    function ($scope, $location,  $route, requestManager, baseUrl, messaging, authentification) {
        var isLogged = authentification.isLogged(); 
        if (isLogged) {
            var databaseUrl = baseUrl + 'user/ads';
            requestManager.getDataFromUrl(databaseUrl).then(function (data) {
                $scope.UserAds = data.ads;
            }, function (error) {
                messaging.errorMsg('There was a problem whit getting data! Message: ' + error.message);
            });

            $scope.deactivateAd = function (ad) {
                var databaseUrl = baseUrl + 'user/ads/deactivate/' + ad.id;
                requestManager.putSomeData(null, databaseUrl).then(function(data) {
                    messaging.successMsg('The ad was deactivated successful!');
                    $location.path('/user/ads');
                    $route.reload();
                }, function(error) {
                    messaging.errorMsg('There was a problem whit deactivatin! Message: ' + error.message);
                });
            }

            $scope.publishAgainAd = function (ad) {
                var databaseUrl = baseUrl + 'user/ads/publishagain/' + ad.id;
                requestManager.putSomeData(null, databaseUrl).then(function(data) {
                    messaging.successMsg('The ad was published successful!');
                    $location.path('/user/ads');
                    $route.reload();
                }, function (error) {
                    messaging.errorMsg('There was a problem whit publishing! Message: ' + error.message);
                });
            }
        } else {
            $location.path('/please-login');
        }
    }]);