'use strict';
adsApp.controller('LogoutController', ['$scope','$location', '$rootScope', 'messaging', 'authentification',
    function ($scope, $location, $rootScope, messaging, authentification) {
        $scope.logout = function() {
            authentification.clearUser();
            $rootScope.isLogged = false;
            $rootScope.username = undefined;
            $location.path('/');
            messaging.successMsg('Logout successful!');
        }
    }]);