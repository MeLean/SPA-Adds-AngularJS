'use strict';
adsApp.factory('authentification', function () {
    var key = 'user';

    var saveUser = function(data) {
        localStorageServiceProvider.set(key, data);
    }

    var getUser = function () {
        localStorageServiceProvider.get(key);
    }

    return {
        saveUser: saveUser,
        getUser: getUser
    }
});