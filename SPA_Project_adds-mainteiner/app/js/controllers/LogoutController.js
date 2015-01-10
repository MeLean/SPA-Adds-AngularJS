'use strict';
adsApp.controller('LogoutController', ['$scope', '$location', '$rootScope', '$window', 'messaging', 'authentification',
    function ($scope, $location, $rootScope, $window, messaging, authentification) {
        $scope.logout = function() {
            authentification.clearUser();
            $rootScope.username = null;
            $location.path('/'); 
            $window.location.reload();
            messaging.successMsg('Logout successful!');
        }
    }]);