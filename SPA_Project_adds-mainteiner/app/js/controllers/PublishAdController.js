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

            $scope.submitAd = function(ad) {
                
            } 
        };
    }]);
