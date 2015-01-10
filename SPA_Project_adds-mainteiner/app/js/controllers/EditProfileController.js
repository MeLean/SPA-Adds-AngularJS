'use strict';

adsApp.controller('EditProfileController', ['$scope', '$location', '$rootScope', 'requestManager', 'baseUrl', 'messaging', 'authentification',
    function ($scope, $location, $rootScope, requestManager, baseUrl, messaging, authentification) {
        var isLogged = authentification.isLogged();
        if (isLogged) {
            $scope.user = authentification.getUser();
        } else {
            $location.path('/please-login');
        }
    }]);