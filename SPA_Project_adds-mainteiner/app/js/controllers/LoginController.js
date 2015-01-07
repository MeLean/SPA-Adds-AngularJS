'use strict';

adsApp.controller('LoginController', function ($scope, requestManager, baseUrl) {

    $scope.login = function () {
        var user = $scope.user;
        var url = baseUrl + 'user/login';
        requestManager.login(user, url)
            .then(function (data) {
                $("#message").notify('There are no such ads!', 'success', { autoHideDelay: 3000, globalPosition: 'top center' });
                alert(JSON.stringify(data)); // todo delete this
            });
    }
});