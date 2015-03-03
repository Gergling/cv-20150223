angular.module('section-skills').controller("section-skills.controller.index", [

    "$scope",
    "section-skills.service.list",

    function($scope, skills) {

        "use strict";

        $scope.skills = skills;
    }
]);
