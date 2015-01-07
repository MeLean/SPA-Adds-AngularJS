'use strict';

adsApp.controller('LoginController', ['$scope', 'requestManager', 'baseUrl', 'messaging', function ($scope, requestManager, baseUrl, messaging) {

    $scope.login = function () {
        var user = $scope.user;
        var url = baseUrl + 'user/login';
        requestManager.login(user, url)
            .then(function success(data) {  
                messaging.successMsg('Login successful');
                console.log(data); // todo delete this
        }, function(data) {
            messaging.errorMsg('Login unsuccessful!');
            console.log(data);
        });
    }
}]);