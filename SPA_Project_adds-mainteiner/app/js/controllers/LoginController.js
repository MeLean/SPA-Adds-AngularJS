'use strict';

adsApp.controller('LoginController', ['$scope', 'requestManager', 'baseUrl', 'messaging', '$location', function ($scope, requestManager, baseUrl, messaging, $location) {

    $scope.login = function () {
        var user = $scope.user;
        var url = baseUrl + 'user/login';
        requestManager.login(user, url)
            .then(function(data) {  
                messaging.successMsg('Login successful');
                $location.path('/');
                console.log(data); // todo delete this
        }, function(data) {
            messaging.errorMsg('Login unsuccessful!');

            console.log(data);
        });
    }
}]);