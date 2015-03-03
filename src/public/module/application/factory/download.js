angular.module('application').factory("application.factory.download", [

    "$rootScope",
    "section-skills.factory.list",
    "section-projects.factory.list",
    "section-jobs.factory.list",

    function ($rootScope, skills, projects, jobs) {

        "use strict";

        var obj = {
            txt: "",
            jobs: jobs,
        };
        return obj;
    }
]);
