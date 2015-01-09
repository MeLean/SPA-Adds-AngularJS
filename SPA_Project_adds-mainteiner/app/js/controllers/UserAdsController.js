'use strict';

adsApp.controller('UserHomeController', ['$scope', '$location', '$rootScope', 'requestManager', 'baseUrl', 'messaging', 'authentification',
    function ($scope, $location, $rootScope, requestManager, baseUrl, messaging, authentification) {
        var headers = authentification.getHeaders();
       
        requestManager.getDataFromUrl(baseUrl + 'user/ads', headers).then(function (data) {
      
            console.log(data);
        }, function(error) {
            messaging.errorMsg('There was a problem getting data! Message: ' + error.message);
        });
    }]);