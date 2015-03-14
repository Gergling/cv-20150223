angular.module('section-projects').controller("section-projects.controller.index", [

    "$scope",
    "section-projects.service.list",

    function ($scope, projects) {

        "use strict";

        $scope.projects = projects;
    }
]);
