'use strict';
adsApp.controller('RegisterController', ['$scope', 'requestManager', 'baseUrl', 'messaging', '$location', function ($scope, requestManager, baseUrl, messaging, $location) {

    $scope.register = function() {
        var user = $scope.user;
        var url = baseUrl + 'user/register';
        if (user.password === user.confirmPassword) {
            requestManager.register(user, url)
                .then(function (data) {
                    messaging.successMsg('Registration successful!');
                    $scope.username = data.username;
                    $location.path('/');
                    console.log(data); // todo delete this
                }, function (data) {
                    var details = JSON.stringify(data.modelState);
                    var msgDetails = details.slice(5, (details.length - 2));
                    messaging.errorMsg('Registration failed! Details: ' + msgDetails); 
                });
        } else {
            messaging.errorMsg('Passwords do not match!');
        }

    }
}]);