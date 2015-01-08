'use strict';

adsApp.controller('LoginController', ['$scope', '$location', 'requestManager', 'baseUrl', 'messaging', 'authentification',
    function ($scope, $location, requestManager, baseUrl, messaging, authentification) {

    $scope.login = function () {
        $scope.header = 'Login';
        var user = $scope.user;
        var url = baseUrl + 'user/login';
        requestManager.login(user, url)
            .then(function(data) {  
                messaging.successMsg('Login successful');
                authentification.saveUser(data);
                $location.path('/');
                console.log(data); // todo delete this
        }, function(data) {
            messaging.errorMsg('Login unsuccessful!'); 
            console.log(data);
        });
    }
}]);