'use strict';
adsApp.factory('adsData', function ($http, $q) {
    return {
        getAds: function (url) {
            var defer = $q.defer();

            $http.get(url)
                .success(function (data, status, headers, config) {
                    defer.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    console.log(data);
                    //TODO make notification
            });

            return defer.promise;
        }
    }
});