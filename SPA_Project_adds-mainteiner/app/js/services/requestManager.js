'use strict';
adsApp.factory('requestManager', function ($http, $q) {
    var requester = function (url, method) {
        var defer = $q.defer();

        $http({
            url: url,
            method: method,
        }).success(function (data, status, headers, config) {
                defer.resolve(data);
            })
            .error(function (data, status, headers, config) {
                defer.reject(data);
                console.log(data);
                //TODO make notification
            });

        return defer.promise;
    }

    var getDataFromUrl = function(dataUrl) {
        return requester(dataUrl, 'GET');
    };

    return {
        getDataFromUrl : getDataFromUrl
    }
});