'use strict';
adsApp.controller('LogoutController', ['$scope','$location', '$rootScope', 'messaging', 'authentification',
    function ($scope, $location, $rootScope, messaging, authentification) {
        $scope.logout = function() {
            authentification.clearUser();
            $rootScope.username = undefined;
            $location.path('/login-form');
            messaging.successMsg('Logout successful!');
        }
    }]);