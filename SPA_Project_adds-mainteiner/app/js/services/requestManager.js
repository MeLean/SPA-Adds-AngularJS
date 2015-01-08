'use strict';
adsApp.factory('requestManager', ['$http', '$q', function ($http, $q) {
    var requester = function (obj, url, method) {
        var defer = $q.defer();

        $http({
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

    var getDataFromUrl = function(databaseUrl) {
        return requester(null, databaseUrl, 'GET');
    }

    var loginToSystem = function (obj, databaseUrl) {
        return requester(obj, databaseUrl, 'POST');
    }


    return {
        getDataFromUrl: getDataFromUrl,
        loginToSystem: loginToSystem,
    }
}]);