'use strict';
adsApp.controller('RegisterController', ['$scope', 'requestManager', 'baseUrl', 'messaging', function ($scope, requestManager, baseUrl, messaging) {

    $scope.register = function() {
        var user = $scope.user;
        var url = baseUrl + 'user/register';
        requestManager.register(user, url)
            .then(function(data) {
                messaging.successMsg('Registration successful! Please, login');
                $scope.username = data.username;
                console.log(data); // todo delete this
            });
    }
}]);