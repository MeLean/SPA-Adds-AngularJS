'use strict';
adsApp.controller('RegisterController', ['$scope', 'requestManager', 'baseUrl', 'messaging', '$location', function ($scope, requestManager, baseUrl, messaging, $location) {

    $scope.register = function() {
        var user = $scope.user;
        var url = baseUrl + 'user/register';
        requestManager.register(user, url)
            .then(function(data) {
                messaging.successMsg('Registration successful!');
                $scope.username = data.username;
                $location.path('/');
                console.log(data); // todo delete this
            }, function (data) {
                messaging.errorMsg('Registration failed! Details:' + JSON.stringify(data.modelState));
                console.log(data); // todo delete this
            });
    }
}]);