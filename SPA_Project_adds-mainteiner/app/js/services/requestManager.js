'use strict';
adsApp.factory('requestManager', ['$http', '$q', function ($http, $q) {
    var requester = function (obj, url, method, headers) {
        var defer = $q.defer();
        var requestingHeaders = headers || {};
        $http({
            headers: requestingHeaders,
            url: url,
            method: method,
            data: obj
        }).success(function (data, status, headers, config) {
                defer.resolve(data);
            })
            .error(function (data, status, headers, config) {
                defer.reject(data);  
        });

        return defer.promise;
    }

    var getDataFromUrl = function (databaseUrl, headers) {
        return requester(null, databaseUrl, 'GET', headers);
    }

    var loginToSystem = function (obj, databaseUrl) {
        return requester(obj, databaseUrl, 'POST', null);
    }

    var uploadUserAd = function(obj, databaseUrl, headers) {
        return requester(obj, databaseUrl, 'POST', headers);
    }

    return {
        getDataFromUrl: getDataFromUrl,
        loginToSystem: loginToSystem,
        uploadUserAd: uploadUserAd,
    }
}]);