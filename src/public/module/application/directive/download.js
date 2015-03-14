angular.module('application').directive('cvDownload', function () {

    "use strict";

    return {
        restrict: 'A',
        templateUrl: "module/application/partial/download-sample.html",
        controller: [

            "$scope",
            "application.factory.download",

            function ($scope, download) {
                $scope.jobs = download.jobs;
            }
        ]
    };
});
