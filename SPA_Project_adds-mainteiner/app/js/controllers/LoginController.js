'use strict';

adsApp.controller('LoginController', ['$scope', '$location', '$rootScope', 'requestManager', 'baseUrl', 'messaging', 'authentification',
    function ($scope, $location, $rootScope, requestManager, baseUrl, messaging, authentification) {
    $scope.login = function () { 
        var user = $scope.user;
        var url = baseUrl + 'user/login';
        requestManager.loginToSystem(user, url)
            .then(function(data) {  
                messaging.successMsg('Login successful');
                authentification.saveUser(data);
                $rootScope.username = data.username;
                $rootScope.isLogged = authentification.isLogged();
                $location.path('/user/home');
                console.log(data); // todo delete this
        }, function(data) {
            messaging.errorMsg('Login unsuccessful!'); 
            console.log(data);
        });
    }
}]);