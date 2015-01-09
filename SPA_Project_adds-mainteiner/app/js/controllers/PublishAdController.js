'use strict';

adsApp.controller('PublishAdController', ['$scope', '$location', '$rootScope', 'requestManager', 'baseUrl', 'messaging', 'authentification',
    function ($scope, $location, $rootScope, requestManager, baseUrl, messaging, authentification) {
        $scope.fileSelected = function (fileInputField) {
            //delete $scope.ad.imageDataUrl;
            var file = fileInputField.files[0];
            if (file.type.match(/image\/.*/)) {
                var reader = new FileReader();
                reader.onload = function () {
                    $scope.ad.imageDataUrl = reader.result;
                    $(".image-box").html("<img src='" + reader.result + "'>");
                };
                reader.readAsDataURL(file);
            } else {
                $(".image-box").html("<p>File type not supported!</p>");
            }
        };

        $scope.submitAd = function (ad) {
            var headers = authentification.getHeaders();
            var databaseUrl = baseUrl + 'user/ads';
            requestManager.uploadUserAd(ad, databaseUrl, headers).then(function () {
                $location.path('/user/ads'); // todo make my ads
                messaging.successMsg('The was added successful!');
            }, function (error) {
                messaging.errorMsg('There was a problem getting data upload! Message: ' + error.message);

            });
        }
    }]);
