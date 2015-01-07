'use strict';
adsApp.controller('RegisterController', function ($scope, requestManager, baseUrl, $location) {

    $scope.register = function() {
        var user = $scope.user;
        var url = baseUrl + 'user/register';
        requestManager.register(user, url)
            .then(function(data) {
                $("#message").notify('Registration successful! Please, login', 'success', { autoHideDelay: 3000, globalPosition: 'top center' });
                alert(JSON.stringify(data)); // todo delete this
        });
    }
});