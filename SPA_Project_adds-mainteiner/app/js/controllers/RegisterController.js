'use strict';
adsApp.controller('RegisterController', ['$scope', '$location', 'requestManager', 'baseUrl', 'messaging', 'authentification', function ($scope, $location, requestManager, baseUrl, messaging, authentification) {

    $scope.register = function () {
        $scope.header = 'Register';
        var user = $scope.user;
        var url = baseUrl + 'user/register';
        if (user.password === user.confirmPassword) {
            requestManager.register(user, url)
                .then(function (data) {
                    messaging.successMsg('Registration successful!');
                    authentification.saveUser(data);
                    $scope.isLoged = true;
                    $location.path('/');
                    console.log(data); // todo delete this
                }, function (data) {
                    var details = angular.toJson(data.modelState);
                    var msgDetails = details.slice(5, (details.length - 2));
                    messaging.errorMsg('Registration failed! Details: ' + msgDetails); 
                });
        } else {
            messaging.errorMsg('Passwords do not match!');
        }

    }
}]);