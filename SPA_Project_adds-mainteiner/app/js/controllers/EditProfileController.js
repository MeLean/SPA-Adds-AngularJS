'use strict';

adsApp.controller('EditProfileController', ['$scope', '$location', '$rootScope', 'requestManager', 'baseUrl', 'messaging', 'authentification',
    function ($scope, $location, $rootScope, requestManager, baseUrl, messaging, authentification) {
        var isLogged = authentification.isLogged();
        if (isLogged) {
            //get user data api/user/Profile
            var databaseUrl = baseUrl + 'user/profile';
            requestManager.getDataFromUrl(databaseUrl).then(function(data) {
                $scope.user = data;
                alert(JSON.stringify(data)); //todo delete this
            }, function(error) {
                messaging.errorMsg('Could not get user`s data from server! Message: ' + error.message);
            });
        } else {
            $location.path('/please-login');
        }
    }]);