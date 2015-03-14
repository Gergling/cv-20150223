angular.module('section-jobs').controller("section-jobs.controller.index", [

    "$scope",
    "section-jobs.service.list",

    function ($scope, jobs) {

        "use strict";

        $scope.jobs = jobs;
    }
]);
